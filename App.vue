

<script>
	import { useMusicStore, useStatusStore, useSettingStore } from "@/stores";
	import { init } from '@/utils/init';
	
	const musicStore = useMusicStore();
	const statusStore = useStatusStore();
	const settingStore = useSettingStore();
	
	// 主内容
	const contentRef = ref< HTMLElement | null>(null);
	
	// 主内容高度
	const { height: contentHeight } = useElementSize(contentRef);
	
	watchEffect(() => {
	  statusStore.mainContentHeight = contentHeight.value;
	});
	
	onMounted(async () => {
	  await init();
	});
</script>

<style>
	/*每个页面公共css */
	#main {
		flex: 1;
		height: 100%;
		transition:
			transform 0.3s var(--n-bezier),
			opacity 0.3s var(--n-bezier);
	
		#main-layout {
			background-color: rgba(var(--background), 0.58);
		}
	
		#main-content {
			top: 70px;
			background-color: transparent;
			transition: bottom 0.3s;
	
			.router-view {
				position: relative;
				height: 100%;
	
				&.n-result {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
			}
		}
	
		&.show-player {
	
			// #main-sider {
			//   margin-bottom: 80px;
			// }
			#main-content {
				bottom: 80px;
			}
		}
	
		&.show-full-player {
			opacity: 0;
			transform: scale(0.9);
	
			#main-header {
				-webkit-app-region: no-drag;
			}
		}
	}
</style>
