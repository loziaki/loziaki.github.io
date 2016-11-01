Vue.transition('fadeUp', {
    type: 'animation',
    enterClass: 'fadeIn',
    leaveClass: 'fadeOutDown'
});

Vue.transition('fade', {
    type: 'animation',
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
});

Vue.transition('slide', {
    type: 'animation',
    enterClass: 'slideInUp',
    leaveClass: 'slideOutDown'
});

var app = new Vue({
    el: 'body',
    data: function () {
        return {
            question: [{
                title: '<p>仅通过基础测试的程序</p><p class="sup">这程序可能还有BUG！</p>',
                rm: '软件发布前，应该编写完整测试，充分调试，尽量修复所有bug。',
                wm: '不管多努力，BUG 总是无法避免的，如果性质不是很严重，可以先上线，根据反馈再调试和修补。',
            }, {
                title: '<p>好用但容易出错的语言特性</p><p class="sup">譬如兼容性低或不稳定的功能</p>',
                rm: '很多语言的高级特性都是很容易出错和危险的，应该禁止用在代码里。没有这些特性我们一样可以进行开发，代码也会因此变得更安全。',
                wm: '聪明的程序员有学习动力，知道怎么可以解决问题。为了避免出错，就立下一堆规矩，完全不可取。'
            }, {
                title: '<p>团队不限制语言或语法<p class="sup">我们中出了一个使用其他语言的家伙!</p></p>',
                rm: '公司里可以使用的语言数量应该受到限制，这样万一系统在半夜或是圣诞夜挂掉的时候，值班的人就不需要去临时抱佛脚学习新语法了。另外，也应该禁止改变语言原始定义的语法，比如严格限制操作符重载和元编程。',
                wm: '程序员的学习能力是惊人的，没必要"保护"程序员远离新语法，只要有需要，他们自然能学会。'
            }, {
                title: '<p>代码要进行静态检查</p><p class="sup">在不跑程序下的对代码进行错误排查</p>',
                rm: '编译器的安全检查很重要，不能进行静态检查的代码通常是不可接受的。',
                wm: '代码应该短小精悍，静态检查工具可能会让代码变得又臭又长。'
            }, {
                title: '<p>要求程序有严格的数据定义</p><p class="sup">譬如规定传递的参数、数据类</p>',
                rm: '数据必须遵循事先定义好的格式。比如，关系型数据库必须满足第三范式或UML，XML都必须有DTD，NoSQL数据库必须有单独的格式定义（标明所有允许的键，以及相应的值类型）。',
                wm: '严格的数据定义只会妨碍灵活性，延缓开发进程。更好的策略是写一些注释，或者只定义一部分，甚至先略过它。因为在大量用户案例出现之前，没人知道数据可能会是什么样，代码先行才是正确的做法。'
            }, {
                title: '<p>公共接口的静态化处理</p><p class="sup">永远不改的传参数数量和格式、类型</p>',
                rm: '公共接口必须严格建模。数据绝不可以是无类型的，所有的输入输出实体都必须完整显式地定义为可以静态检查的模型。',
                wm: '公共接口应该尽量简单，向前向后都兼容。建模时太过缜密的话，其实只是在猜测接口会怎么演化。'
            }, {
                title: '<p>程序有方便修改调试的后门</p><p class="sup">线上程序要改配置？我现在就用后门去改</p>',
                rm: '生产系统里绝不允许存在危险或有风险的后门。想要通过调试器、SSH、或任何接口，连接到工作中的生产系统，去修改运行时的代码或数据，应该是不可能的。',
                wm: '系统的灵活性，有时能决定客户或合同是归你还是归对手。至于生产系统的安全隐患，可以通过日志、监控、审核等手段来缓解。事实证明，很多有最高权限后门和Shell 接口的大型系统，都做到了在控制风险的同时具备运行灵活性。'
            }, {
                title: '<p>急上线但有安全隐患的系统</p><p class="sup">运营和产品经理催着这上线！</p>',
                rm: '假如一个组件的安全性存在任何疑虑，那它就不能发布上线，团队怎么哀求都没用。',
                wm: '企业要保持竞争力，唯有不断有意识地去承担风险。就算不去冒险，其他系统急需这个系统，线上可能还是会出问题，既然如此那还不如冒险一试。',
            }, {
                title: '<p>逻辑正确但是效率低的代码</p><p class="sup">虽然能跑，但是就是感觉有点慢</p>',
                rm: '快比慢好。没人喜欢慢的代码，所以代码的性能一定要好。从一开始，就要有性能意识，那些比较慢的语言和库都应该避免使用。',
                wm: '不要过早优化，代码先跑起来再说。正确性比性能重要，而原型的快速迭代又比正确性更重要。只有当客户将性能列为首要问题时，再进行优化。',
            }],
            index: 1,
            msgList: [],
            answer: [null, null, null, null, null, null, null, null, null],
            resultType: true,
            flag: {
                question: true,
                result: false,
                intro: false,
                compelete: false
            }

        };
    },
    methods: {
        nextQuestion: function () {
            if (this.index < 9) {
                // document.querySelector(".main-content").classList.add('fadeOut');
                this.index++;
                if (true === this.flag.intro) {
                    this.msgList = [];
                    this.msgList.push({
                        type: true,
                        str: this.question[this.index - 1].rm
                    });
                    this.msgList.push({
                        type: false,
                        str: this.question[this.index - 1].wm
                    });
                }
            }
        },
        preQuestion: function () {
            if (this.index > 1) {
                this.index--;
                if (true === this.flag.intro) {
                    this.msgList = [];
                    this.msgList.push({
                        type: true,
                        str: this.question[this.index - 1].rm
                    });
                    this.msgList.push({
                        type: false,
                        str: this.question[this.index - 1].wm
                    });
                }
            }
        },
        setAnswer: function (value) {
            this.answer[this.index - 1] = value;
            if (this.index === 9) {
                this.flag.compelete = true;
                return;
            }
            this.index++;
        },
        showIntro: function () {
            this.flag.intro = !this.flag.intro;
            if (this.flag.intro) {
                this.msgList = [];
                this.msgList.push({
                    type: true,
                    str: this.question[this.index - 1].rm
                });
                this.msgList.push({
                    type: false,
                    str: this.question[this.index - 1].wm
                });
            }
            document.querySelector("#qView").classList.toggle('short-content');
        },
        showResult: function () {
            this.flag.result = !this.flag.result;
            var trueNum = 0;
            for (var a in this.answer) {
                var value = false;
                if (a < 4 || a > 6) {
                    value = true;
                }

                if (value === this.answer[a]) {
                    trueNum++;
                }
            }
            if (trueNum > 4) {
                this.resultType = false;
            } else {
                this.resultType = true;
            }
        }
    }
});