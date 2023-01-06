<template>
	<div>
		// <h1 v-text="msg" id="title"></h1>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		// <School id="sch"/>
		<School ref="sch"/>
	</div>
</template>

<script>
	//引入School组件
	import School from './components/School'

	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				// 获取dom标签，对传统的html标签可直接用id或ref来获取dom标签，但是对于组件标签用ref就不是，他只得该组件的VC，而用id就是获取该组件的所有标签
				// console.log(document.getElementById('title'))
				// console.log(document.getElementById('sch'))
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
			}
		},
	}
</script>
