<template>
    <canvas ref="canvas" class="GoBang" @click="click"></canvas>
</template>

<script>
    export default {
        props: {
            width: {
                type: Number,
                default: 500
            },
            height: {
                type: Number,
                default: 500
            },
            xNumb: {
                type: Number,
                default: 10
            },
            yNumb: {
                type: Number,
                default: 10
            },
            pieceType: {
                type: Number,
                default: 1, //默认黑子先手
            }
        },
        data() {
            return {
                ctx: null,
                gridList: (new Array(this.xNumb * this.yNumb)).fill(0), //一维数组模拟二维数组,0无子， 1黑子， -1白子
                nowType: this.pieceType
            }
        },
        computed: {
            gridWidth: {
                set() {},
                get() {
                    return this.width / this.xNumb;
                }
            },
            gridHeight() {
                return this.height / this.yNumb;
            }
        },
        methods: {
            getPieceIndex(x, y) {
                return {
                    x: Math.floor(x / this.gridWidth),
                    y: Math.floor(y / this.gridHeight)
                }
            },
            getType(x, y) {
                if (x < 0 || y < 0 || x > this.xNumb || y > this.yNumb) {
                    return NaN;
                }
                return this.gridList[y * this.xNumb + x];
            },
            isWin(x, y) { //基准点
                let left = -1,
                    right = 1;
                const type = this.getType(x, y);
                let count = 0, //当count为4返回true
                    add = 1; //判断的次数;
                while (left || right) { //水平方向
                    if (this.getType(left * add + x, y) === type && left) {
                        count += 1;
                    } else {
                        left = 0;
                    }
                    if (this.getType(right * add + x, y) === type && right) {
                        count += 1;
                    } else {
                        right = 0;
                    }
                    if (count === 4) {
                        console.log("水平");
                        return true;
                    }
                    add += 1;
                }
                //垂直方向
                count = 0,
                add = 1;
                let top = -1,
                    bottom = 1;
                while (top || bottom) {
                    if (this.getType(x, y + top * add) === type && top !== 0) {
                        count += 1;
                    } else {
                        top = 0;
                    }
                    if (this.getType(x, y + bottom * add) === type && bottom !== 0) {
                        count += 1;
                    } else {
                        bottom = 0;
                    }
                    if (count === 4) {
                        console.log("垂直");
                        return true;
                    }
                    add += 1;
                }
                //左斜
                count = 0,
                add = 1;
                left = -1,
                right = 1,
                top = -1,
                bottom = 1;
                while (left || right) {
                    if (this.getType(x + left * add, y + top * add) === type && left && top) {
                        count += 1;
                    } else {
                        left = 0;
                        top = 0;
                    }
                    if (this.getType(x + right * add, y + bottom * add) === type && right && bottom) {
                        count += 1;
                    } else {
                        bottom = 0;
                        right = 0;
                    }
                    if (count === 4) {
                        console.log("左斜");
                        return true;
                    }
                    add += 1;
                }
                //右斜
                count = 0,
                add = 1;
                left = -1,
                right = 1,
                top = -1,
                bottom = 1;
                while (left || right) {
                    if (this.getType(x + left * add, y + bottom * add) === type && left && bottom) {
                        count += 1;
                    } else {
                        left = 0;
                        bottom = 0;
                    }
                    if (this.getType(x + right * add, y + top * add) === type && top && right) {
                        count += 1;
                    } else {
                        right = 0;
                        top = 0;
                    }
                    if (count === 4) {
                        console.log("右斜");
                        return true;
                    }
                    add += 1;
                }
            },
            draw() {
                const ctx = this.ctx;
                for (let i = 0; i < this.xNumb; i++) {
                    for (let j = 0; j < this.yNumb; j++) {
                        const type = this.gridList[j * this.xNumb + i];
                        if (type !== 0) {
                            ctx.beginPath();
                            ctx.arc(
                                (i + 0.5) * this.gridWidth,
                                (j + 0.5) * this.gridHeight,
                                this.gridWidth / 2.5,
                                0,
                                2 * Math.PI
                            );
                            if (type === 1) {
                                ctx.fillStyle = "black";
                            } else if (type === -1) {
                                ctx.fillStyle = "red";
                            }
                            ctx.closePath();
                            ctx.fill();
                        }
                    }
                }
            },
            click(e) {
                const {x, y} = this.getPieceIndex(e.offsetX, e.offsetY);
                this.gridList[y * this.xNumb + x] = this.nowType;
                this.nowType *= -1;
                this.draw();
                console.log(this.isWin(x, y));
                if (this.isWin(x, y)) {
                    alert("胜负已分");
                }
            }
        },
        mounted() {
            const canvas = this.$refs.canvas;
            canvas.width = this.width;
            canvas.height = this.height;
            canvas.style.border = "1px solid";
            const ctx = canvas.getContext("2d");
            this.ctx = ctx;
            canvas.style.display = "block"; //避免出现空白
            ctx.lineWidth = 1;
            for (let i = 1; i < this.xNumb; i++) {
                ctx.moveTo(i * this.gridWidth, 0);
                ctx.lineTo(i * this.gridWidth, this.height);
                ctx.stroke();
            }
            for (let i = 1; i < this.yNumb; i++) {
                ctx.moveTo(0, i * this.gridHeight);
                ctx.lineTo(this.width, i * this.gridHeight);
                ctx.stroke();
            }
        }
    }
</script>

<style></style>