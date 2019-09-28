<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
  <div id="app">
    <mt-button @click.native="handleClick">Button</mt-button>
  </div>
	</view>
</template>


<script>
	// import {mint} from '../../static/assets/mint.js'
	export default {
		el:'#app',
		data() {
			return {
				title: ' 你好'
			}
		},
		onLoad() {

		},
		methods: {
         handleClick: function() {
	          this.$toast('Hello world!')
	        }
		}
	}
	
</script>

<style>
	/* @import url("../../static/assets/mint.css"); */
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
