<template>
  <div id="app">
    <div class="row">
      <Will-button>默认</Will-button>
      <Will-button type="primary">primary</Will-button>
      <Will-button type="success">success</Will-button>
      <Will-button type="info">info</Will-button>
      <Will-button type="warning">waring</Will-button>
      <Will-button type="danger">danger</Will-button>
    </div>
    <div class="row">
      <Will-button plain>朴素按钮</Will-button>
      <Will-button plain type="primary">primary</Will-button>
      <Will-button plain type="success">success</Will-button>
      <Will-button plain type="info">info</Will-button>
      <Will-button plain type="warning">waring</Will-button>
      <Will-button plain type="danger">danger</Will-button>
    </div>
    <div class="row">
      <Will-button plain round>圆角按钮</Will-button>
      <Will-button plain round type="primary">primary</Will-button>
      <Will-button plain round type="success">success</Will-button>
      <Will-button plain round type="info">info</Will-button>
      <Will-button plain round type="warning">waring</Will-button>
      <Will-button plain round type="danger">danger</Will-button>
    </div>
    <div class="row">
      <Will-button plain circle>圆</Will-button>
      <Will-button plain circle type="primary">圆</Will-button>
      <Will-button plain circle type="success">圆</Will-button>
      <Will-button plain circle type="info">圆</Will-button>
      <Will-button plain circle type="warning">圆</Will-button>
      <Will-button plain circle type="danger">圆</Will-button>
    </div>
    <div class="row">
      <Will-button plain circle icon="fa-quora"></Will-button>
      <Will-button plain circle icon="fa-quora" type="primary"></Will-button>
      <Will-button plain circle icon="fa-phone" type="success"></Will-button>
      <Will-button plain circle icon="fa-phone" type="info"></Will-button>
      <Will-button plain circle icon="fa-phone" type="warning"></Will-button>
      <Will-button plain circle icon="fa-phone" type="danger"></Will-button>
    </div>
    <div class="row">
      <Will-button plain round icon="fa-phone">圆角按钮</Will-button>
      <Will-button plain round icon="fa-phone" type="primary"
        >primary</Will-button
      >
      <Will-button plain round icon="fa-phone" type="success"
        >success</Will-button
      >
      <Will-button plain round icon="fa-phone" type="info">info</Will-button>
      <Will-button plain round icon="fa-phone" type="warning"
        >waring</Will-button
      >
      <Will-button plain round icon="fa-phone" type="danger"
        >danger</Will-button
      >
    </div>
    <div class="row">
      <Will-button plain round disabled>禁用样式</Will-button>
      <Will-button plain round disabled type="primary">primary</Will-button>
      <Will-button plain round disabled type="success">success</Will-button>
      <Will-button plain round disabled type="info">info</Will-button>
      <Will-button plain round disabled type="warning">waring</Will-button>
      <Will-button plain round disabled type="danger">danger</Will-button>
    </div>

    <div class="row">
      <Will-button type="primary" @click="showDiaLog">显示dialog</Will-button>
    </div>

    <!--
    标题通过属性传递
    <Will-dialog title="标题"></Will-dialog>
    -->
    <!--
    标题通过插槽传递 
    <Will-dialog>
      <template v-slot:title>
        <h3>标题</h3>
      </template>
    </Will-dialog>
    -->
    <!--
    距离顶部高度和宽度
    <Will-dialog title="标题" width="60%" top="100px"></Will-dialog>
    -->

    <!--
    匿名插槽body区域和具名插槽footer
    <Will-dialog title="标题">
      body
      <template v-slot:footer>
        <Will-button>取消</Will-button>
        <Will-button type="primary">确定</Will-button>
      </template>
    </Will-dialog>
    -->

    <!--
    通过注册close事件关闭（麻烦，下面是正确示例，用sync修饰符）
    <Will-dialog title="标题" :visible="visible" @close="close">
      body
      <template v-slot:footer>
        <Will-button>取消</Will-button>
        <Will-button type="primary">确定</Will-button>
      </template>
    </Will-dialog>
    -->

    <!--
    sync修饰符
    // 父组件
    <demo :visible='visible' :money='money' @update:money='val => { money=val }' ></demo>
    // 子组件发布事件
    this.$emit("update:money",200)
    // 使用sync修饰符时 无需父组件无需注册相应的更新事件 但子组件需要按照格式发布事件
    <demo :visible='visible' :money.sync='money' ></demo>
    -->
    <Will-dialog title="标题" :visible.sync="visible" @close="close">
      body
      <template v-slot:footer>
        <Will-button>取消</Will-button>
        <Will-button type="primary">确定</Will-button>
      </template>
    </Will-dialog>

    <!--
    v-model 语法糖 
    <input type="text" v-model="username" />
    // 等价于单项数据流value加监听输入事件
    <input type="text" :value="username" @input="username = $event.target.value" />
    // 自定义的组件如果要用v-model语法糖的话需要在组件接收value 并监听和发布输入事件 
    handleInput(e) {
      this.$emit("input", e.target.value);
    }
    -->
    <div class="row">
      <Will-input placeholder="添加name属性" name="username"></Will-input>
      <Will-input placeholder="v-model语法糖" v-model="username"></Will-input>
      <Will-input placeholder="type='password'" type="password"></Will-input>
      <Will-input
        placeholder="clearable属性"
        v-model="username"
        clearable
      ></Will-input>
      <Will-input
        placeholder="show-password属性"
        v-model="password"
        type="password"
        show-password
      ></Will-input>
      <Will-input placeholder="禁用样式" disabled></Will-input>
    </div>

    <!-- 
      switch
    -->
    <div class="row">
      普通样式
      <Will-switch v-model="switchType" name="sw1"></Will-switch>自定义颜色
      <Will-switch
        v-model="switchType"
        active-color="#13ce66"
        inactive-color="#ff4949"
        name="sw2"
      ></Will-switch
      >@change事件
      <Will-switch
        @change="switchChange"
        v-model="switchType"
        name="sw3"
      ></Will-switch>
    </div>

    <!-- 
      radio不采用点击就发布input事件 而是使用了computed 的get set 为了方便封装radiogroup处理
    -->
    <div class="row">
      <Will-radio label="1" name="r1" @change="radioChange" v-model="radioValue"
        >男</Will-radio
      >
      <Will-radio label="2" name="r2" v-model="radioValue"></Will-radio>
    </div>
    <div class="row">
      <!-- 
        radiogroup v-model 统一绑定到group上 
        // radiogrouop组件 把自己传递给自己的后代
        provide() {
          return {
            RadioGroup: this
          };
        }
        // radio组件 接收
        inject: {
          RadioGroup: {
            default: ""
          }
        }
        // radio的value的获取和修改都要判断
        computed: {
          // 组件内部的双向绑定使用这个 因为不能直接修改父组件的value
          model: {
            get() {
              return this.isGroup ? this.RadioGroup.value : this.value;
            },
            set(val) {
              this.isGroup
                ? this.RadioGroup.$emit("input", val)
                : this.$emit("input", val);
            }
          },
          // 判断是否被radiogroup包裹
          isGroup() {
            return !!this.RadioGroup;
          }
        }
      -->
      <Will-radio-group v-model="radioValue" @change="radioChange">
        <Will-radio label="1" name="r1">男</Will-radio>
        <Will-radio label="2" name="r2">女</Will-radio>
        <Will-radio label="3" name="r3">radio-group @change</Will-radio>
      </Will-radio-group>
    </div>

    <div class="row">
      <Will-checkbox
        label="复选框单独用是布尔值"
        name="c1"
        v-model="checkboxType"
      ></Will-checkbox>
    </div>
    <!-- 
      只要checkbox-group组件绑定了数组 vue内部会自己处理这个数组
    -->
    <div class="row">
      <Will-checkbox-group v-model="checkboxArr">
        <Will-checkbox label="唱" name="c1"></Will-checkbox>
        <Will-checkbox label="跳" name="c2"></Will-checkbox>
        <Will-checkbox label="rap" name="c3"></Will-checkbox>
        <Will-checkbox label="篮球" name="c4"></Will-checkbox>
      </Will-checkbox-group>
    </div>

    <div class="row">
      <Will-form :model="formModel" label-width="100px">
        <Will-form-item label="用户名">
          <Will-input
            v-model="formModel.name"
            placeholder="请输入用户名"
          ></Will-input>
        </Will-form-item>
        <Will-form-item label="选择">
          <Will-switch v-model="formModel.active"></Will-switch>
        </Will-form-item>
      </Will-form>
    </div>

    <div class="row">
      <Will-button type="primary" @click="showLoading"
        >this.$loading.showLoading({})</Will-button
      >
      <Will-button type="primary" @click="showTost"
        >this.$tost.showTost({})</Will-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      visible: false,
      username: "用户名",
      password: "密码",
      switchType: false,
      // radio用
      radioValue: "1",
      // checkbox单独用
      checkboxType: false,
      // checkbox-group
      checkboxArr: ["跳"],
      // form数据
      formModel: {
        name: "",
        active: true
      }
    };
  },
  methods: {
    showLoading() {
      this.$loading.showLoading({ content: "加载中...", mask: true });
    },
    showTost() {
      this.$tost.showTost({ content: "加载中...", mask: true });
    },
    showDiaLog() {
      this.visible = true;
    },
    // 通过注册close事件关闭（麻烦，正确示例用sync修饰符）
    close(type) {
      this.visible = type;
    },
    // switchchange事件
    switchChange(e) {
      window.console.log(``, e);
    },
    // radiochange事件
    radioChange(e) {
      window.console.log(``, e);
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.row {
  margin: 20px;
  // 深度选择 当前组件添加scoped属性的话如果想要影响其他组件 需要用到
  // scss ::v-deep less /deep/ css >>>
  ::v-deep .Will-button {
    margin-right: 10px;
  }
  .Will-input {
    width: 200px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .Will-switch {
    margin-right: 10px;
  }
}
</style>
