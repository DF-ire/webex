// 从Vue的全局对象中解构出所需函数和API
const { createApp, ref, computed, defineComponent } = Vue;
const { ElButton, ElCard, ElCarousel, ElCarouselItem, ElAlert } = ElementPlus;

// --- 页面组件定义 ---
// 为了保持代码清晰，我们将每个“页面”都定义为一个独立的Vue组件

// 1. 首页组件 (HomeView) - (结构不变, 但不再包含Header和Footer)
const HomeView = defineComponent({
    name: 'HomeView',
    components: { ElCarousel, ElCarouselItem, ElCard, ElButton },
    template: `
        <div>
            <!-- 轮播图 -->
            <el-carousel height="60vh" arrow="always" class="hero-carousel">
                <el-carousel-item v-for="item in carouselItems" :key="item.id">
                    <div class="carousel-item-content">
                        <img :src="item.image" :alt="item.title" class="carousel-image"/>
                        <div class="carousel-caption">
                            <h2 class="carousel-title">{{ item.title }}</h2>
                            <p class="carousel-subtitle">{{ item.subtitle }}</p>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <!-- 热门景点 -->
            <section class="attractions-section">
                 <h2 class="section-title">热门景点</h2>
                 <div class="attraction-cards-container">
                    <el-card class="attraction-card" v-for="attraction in featuredAttractions" :key="attraction.id" shadow="hover" :body-style="{ padding: '0px' }">
                        <img :src="attraction.image" :alt="attraction.name" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">{{ attraction.name }}</h3>
                            <p class="card-description">{{ attraction.description }}</p>
                            <el-button type="primary" plain round>查看详情</el-button>
                        </div>
                    </el-card>
                 </div>
            </section>
        </div>
    `,
    setup() {
        const carouselItems = ref([
            { id: 1, title: '青岛 · 帆船之都', subtitle: '感受奥帆中心的现代与激情', image: './images/1.jpg' },
            { id: 2, title: '烟台 · 蓬莱仙境', subtitle: '寻访传说中的八仙过海处', image: './images/2.jpg' },
            { id: 3, title: '青岛 · 八大关', subtitle: '万国建筑博览，一步一景', image: './images/3.jpg' },
            { id: 4, title: '烟台 · 养马岛', subtitle: '被誉为“东方夏威夷”的度假天堂', image: './images/4.jpg' },
        ]);
        const featuredAttractions = ref([
            { id: 'qd-01', name: '青岛栈桥', description: '青岛的象征，漫步于此，海风拂面，鸥鸟翔集。', image: './images/5.jpg' },
            { id: 'yt-01', name: '烟台山', description: '百年灯塔守望着渤海湾，历史与自然在此交融。', image: './images/6.jpg' },
            { id: 'qd-02', name: '崂山', description: '海上第一名山，道教圣地，云雾缭绕，宛如仙境。', image: './images/7.jpg' },
            { id: 'yt-02', name: '长岛', description: '由32个岛屿组成,是候鸟的天堂,渔家乐的胜地。', image: './images/8.jpg' }
        ]);
        return { carouselItems, featuredAttractions };
    }
});

// 2. 新增: 城市概览组件 (CityView) - (这是一个框架，您可以填充具体内容)
const CityView = defineComponent({
    name: 'CityView',
    components: { ElAlert },
    template: `
        <div class="page-container">
            <h1>城市概览</h1>
            <p>青岛，被誉为“帆船之都”，以其红瓦绿树、碧海蓝天的独特风貌和国际性的海洋文化闻名。烟台，作为传说中“八仙过海”的地方，拥有深厚的道教文化底蕴和壮丽的海岸线，被誉为“山海仙市”。</p>
            <el-alert title="待办事项" type="info" description="您可以在此页面下填充更多关于青岛和烟台的历史文化与地理特点。" :closable="false" />
        </div>
    `
});

// 3. 新增: 景点推荐组件 (AttractionsView)
const AttractionsView = defineComponent({
    name: 'AttractionsView',
    template: `
        <div class="page-container">
            <h1>景点推荐</h1>
            <p>这里将详细罗列并介绍青岛和烟台的各大著名景点，如青岛的崂山、五四广场，以及烟台的蓬莱阁、长岛等。每个景点都将配有精美的图片和详尽的攻略信息。</p>
        </div>
    `
});

// 4. 新增: 美食攻略组件 (CuisineView)
const CuisineView = defineComponent({
    name: 'CuisineView',
    template: `
        <div class="page-container">
            <h1>美食攻略</h1>
            <p>品味舌尖上的“鲜”！本页将带您领略青岛啤酒、海鲜烧烤、鲅鱼饺子，以及烟台焖子、福山大面等地方特色美食。更有精选餐厅推荐，让您的味蕾不虚此行。</p>
        </div>
    `
});

// 5. 新增: 住宿推荐组件 (AccommodationView)
const AccommodationView = defineComponent({
    name: 'AccommodationView',
    template: `
        <div class="page-container">
            <h1>住宿推荐</h1>
            <p>从五星级海景酒店到充满情调的特色民宿，我们将为您精选不同价位和风格的住宿选择，并提供预订建议，确保您在旅途中有一个舒适的港湾。</p>
        </div>
    `
});

// 6. 新增: 旅游攻略组件 (TipsView)
const TipsView = defineComponent({
    name: 'TipsView',
    template: `
        <div class="page-container">
            <h1>旅游攻略</h1>
            <p>为您提供最实用的旅游信息，包括最佳旅行时间、两地之间的交通方式、推荐的行程路线（如三日游、五日游）、以及各类注意事项，让您的旅行规划得心应手。</p>
        </div>
    `
});

// 7. 新增: 关于我们组件 (AboutView)
const AboutView = defineComponent({
    name: 'AboutView',
    template: `
        <div class="page-container">
            <h1>关于我们</h1>
            <p>这是一个为Web实训课程倾力打造的旅游信息网站。旨在综合运用HTML5, CSS3, Vue3及Element Plus等前端技术，为您呈现一个美观、详实、易用的青岛与烟台旅游指南。</p>
        </div>
    `
});


// --- 共享组件定义 (Header和Footer) ---

// 页头组件 (TheHeader) - (已修改，用于页面导航)
const TheHeader = defineComponent({
    name: 'TheHeader',
    props: ['activePage'], // 接收父组件传来的当前活动页面标识
    emits: ['navigate'], // 声明一个'navigate'事件，用于通知父组件切换页面
    template: `
        <header class="site-header">
            <div class="logo-container" @click="$emit('navigate', 'home')">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 15.5V8.5C2 7.09435 2.58787 5.74681 3.61091 4.72377C4.63395 3.70072 5.98149 3.11285 7.38715 3.11285H16.6129C18.0185 3.11285 19.366 3.70072 20.3891 4.72377C21.4121 5.74681 22 7.09435 22 8.5V15.5C22 16.9056 21.4121 18.2532 20.3891 19.2762C19.366 20.2993 18.0185 20.8871 16.6129 20.8871H7.38715C5.98149 20.8871 4.63395 20.2993 3.61091 19.2762C2.58787 18.2532 2 16.9056 2 15.5Z" stroke="#409EFF" stroke-width="2"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#409EFF" stroke-width="2"/><path d="M2 12H5" stroke="#409EFF" stroke-width="2"/><path d="M19 12H22" stroke="#409EFF" stroke-width="2"/></svg>
                <span class="logo-text">帆影与仙境</span>
            </div>
            <nav class="main-nav">
                <a @click.prevent="$emit('navigate', 'home')" :class="{ active: activePage === 'home' }" class="nav-link">首页</a>
                <a @click.prevent="$emit('navigate', 'city')" :class="{ active: activePage === 'city' }" class="nav-link">城市概览</a>
                <a @click.prevent="$emit('navigate', 'attractions')" :class="{ active: activePage === 'attractions' }" class="nav-link">景点推荐</a>
                <a @click.prevent="$emit('navigate', 'cuisine')" :class="{ active: activePage === 'cuisine' }" class="nav-link">美食攻略</a>
                <a @click.prevent="$emit('navigate', 'accommodation')" :class="{ active: activePage === 'accommodation' }" class="nav-link">住宿推荐</a>
                <a @click.prevent="$emit('navigate', 'tips')" :class="{ active: activePage === 'tips' }" class="nav-link">旅游攻略</a>
                <a @click.prevent="$emit('navigate', 'about')" :class="{ active: activePage === 'about' }" class="nav-link">关于我们</a>
            </nav>
        </header>
    `
});

// 页脚组件 (TheFooter)
const TheFooter = defineComponent({ name: 'TheFooter', template: `<footer class="site-footer-main"><p>&copy; ${new Date().getFullYear()} 青岛&烟台旅游网. All Rights Reserved.</p><p>Web实训项目 by Your Majesty's Loyal Servant</p></footer>` });


// --- 根组件 (App) - 全新的中央控制器 ---
const App = defineComponent({
    name: 'App',
    components: { TheHeader, TheFooter, HomeView, CityView, AttractionsView, CuisineView, AccommodationView, TipsView, AboutView },
    setup() {
        const currentPage = ref('home');

        const pages = {
            home: HomeView,
            city: CityView,
            attractions: AttractionsView,
            cuisine: CuisineView,
            accommodation: AccommodationView,
            tips: TipsView,
            about: AboutView
        };

        function navigateTo(pageName) {
            currentPage.value = pageName;
            window.scrollTo(0, 0); 
        }
        
        const activeComponent = computed(() => pages[currentPage.value]);

        return {
            currentPage,
            navigateTo,
            activeComponent
        };
    },
    template: `
        <TheHeader :active-page="currentPage" @navigate="navigateTo" />
        <main>
            <!-- 使用Vue内置的<component>标签，动态地渲染当前页面 -->
            <component :is="activeComponent" />
        </main>
        <TheFooter />
    `
});

// --- 创建并挂载Vue应用实例 ---
const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
