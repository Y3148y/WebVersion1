// 多语言数据存储
const translations = {
    zh: {
        // 导航栏
        navTitle: '夏织赣韵——法护出海"布"掉队',
        navSubtitle: 'Gan Flavors Go Global, Law Guards Three Intangibles',
        tagline1: '以江西夏布"非遗文化+天然产品"为核心，搭建"文化传播+跨境交易+法律护航"三位一体的涉外服务平台，',
        tagline2: '既让千年夏布承载赣韵文化走向全球，又通过专业法律支持破解跨境贸易壁垒，实现"文化出海、产品创收、法律护航"同步推进。',
        
        // 导航菜单
        home: '首页',
        about: '关于我们',
        contact: '联系我们',
        
        // 英雄区域
        heroTitle: '传承千年布艺 · 守护文化遗产',
        heroSubtitle: '让世界感受赣鄱大地的非遗魅力',
        
        // 模块区域
        exploreTitle: '探索非遗世界',
        cultureTitle: '夏布文化旅游区',
        cultureDesc: '深入了江西夏布千年传承',
        productsTitle: '夏布臻品产销栏',
        productsDesc: '精选非遗产品，从大众消费到轻奢定制，尽享传统之美',
        legalTitle: '法治保障服务站',
        legalDesc: '知识产权保护，法律条文解读，为非遗传承保驾护航',
        
        // 标签
        cultureBadge: '夏布文化',
        productsBadge: '精品选购',
        legalBadge: '法律保障',
        
        // 底部
        joinUs: '加入我们',
        joinDesc: '成为非遗传承的守护者',
        joinNow: '立即加入',
        feedback: '问题反馈',
        feedbackDesc: '您的意见对我们很重要',
        submitFeedback: '提交反馈',
        contactUs: '联系我们',
        contactEmail: '邮箱: contact@ganculture.com',
        contactPhone: '电话: 0791-12345678',
        
        // 页面标题
        culturePageTitle: '非遗文化介绍馆 - 赣韵出海',
        productsPageTitle: '非遗臻品产销栏 - 赣韵出海',
        legalPageTitle: '法治保障服务站 - 赣韵出海',
        
        // 返回按钮
        backToService: '返回服务站'
    },
    en: {
        // 导航栏
        navTitle: 'Weaving Gan\'s Charms Overseas with Legal Protection',
        navSubtitle: 'Gan Flavors Go Global, Law Guards Three Intangibles',
        tagline1: 'Centered on Jiangxi Xia Bu\'s "Intangible Cultural Heritage + Natural Products", we build a three-in-one international service platform for "Cultural Communication + Cross-border Trade + Legal Protection",',
        tagline2: 'Enabling thousand-year-old Xia Bu to carry Gan\'s cultural charm to the world, while breaking through cross-border trade barriers through professional legal support, achieving synchronized progress in "Cultural Globalization, Product Revenue Generation, and Legal Protection".',
        
        // 导航菜单
        home: 'Home',
        about: 'About Us',
        contact: 'Contact Us',
        
        // 英雄区域
        heroTitle: 'Inheriting Thousand-Year Textile Art · Protecting Cultural Heritage',
        heroSubtitle: 'Let the World Experience the Charm of Gan\'s Intangible Cultural Heritage',
        
        // 模块区域
        exploreTitle: 'Explore the World of Intangible Cultural Heritage',
        cultureTitle: 'Xia Bu Cultural Tourism Area',
        cultureDesc: 'Deep dive into the thousand-year heritage of Jiangxi Xia Bu',
        productsTitle: 'Xia Bu Premium Products',
        productsDesc: 'Selected intangible heritage products, from mass consumption to luxury customization, enjoy the beauty of tradition',
        legalTitle: 'Legal Protection Service Station',
        legalDesc: 'Intellectual property protection, legal interpretation, safeguarding the inheritance of intangible cultural heritage',
        
        // 标签
        cultureBadge: 'Xia Bu Culture',
        productsBadge: 'Premium Selection',
        legalBadge: 'Legal Protection',
        
        // 底部
        joinUs: 'Join Us',
        joinDesc: 'Become a Guardian of Intangible Cultural Heritage',
        joinNow: 'Join Now',
        feedback: 'Feedback',
        feedbackDesc: 'Your Opinion is Very Important to Us',
        submitFeedback: 'Submit Feedback',
        contactUs: 'Contact Us',
        contactEmail: 'Email: contact@ganculture.com',
        contactPhone: 'Phone: 0791-12345678',
        
        // 页面标题
        culturePageTitle: 'Intangible Cultural Heritage Gallery - Gan Goes Global',
        productsPageTitle: 'Premium Intangible Heritage Products - Gan Goes Global',
        legalPageTitle: 'Legal Protection Service Station - Gan Goes Global',
        
        // 返回按钮
        backToService: 'Back to Service Station'
    }
};

// 当前语言状态
let currentLanguage = 'zh';

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSwitcher();
    initializeSlider();
    initializePageSlider(); // 新增：初始化通用页面轮播
    initializeCultureSlider();
    initializeModuleAnimations();
    initializeSmoothScrolling();
    initializeNavbarScroll(); // 新增：初始化导航栏滚动效果
    console.log('🏮 赣韵出海·法护三遗网站初始化完成');
    console.log('🎯 五大功能模块已就绪');
    console.log('✨ 非遗文化传承平台启动成功');
});

// 初始化图片轮播功能
function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    // 自动轮播函数
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // 每5秒切换一次图片
    setInterval(nextSlide, 5000);
    
    console.log('🖼️ 图片轮播功能初始化完成');
}

// ==================== 通用页面轮播功能 ====================
// 功能说明：控制各页面顶部图片展示栏的自动轮播
// 修改说明：如需调整轮播速度，修改setInterval的时间参数（单位：毫秒）
// 注意事项：图片数量变化时，需要同步更新HTML中的控制点数量
function initializePageSlider() {
    // 获取页面轮播相关元素
    const pageSlides = document.querySelectorAll('.page-slide');
    const pageDots = document.querySelectorAll('.page-slider-dot');
    
    // 如果没有找到轮播元素，直接返回
    if (pageSlides.length === 0 || pageDots.length === 0) {
        console.log('ℹ️ 未找到通用页面轮播元素');
        return;
    }
    
    // 当前显示的幻灯片索引
    let currentPageSlide = 0;
    
    // 显示指定幻灯片函数
    // 参数：index - 要显示的幻灯片索引（从0开始）
    function showPageSlide(index) {
        // 移除所有幻灯片的active类（隐藏所有图片）
        pageSlides.forEach(slide => slide.classList.remove('active'));
        
        // 移除所有控制点的active类（重置所有圆点状态）
        pageDots.forEach(dot => dot.classList.remove('active'));
        
        // 添加active类到指定幻灯片（显示当前图片）
        pageSlides[index].classList.add('active');
        
        // 添加active类到对应控制点（激活当前圆点）
        pageDots[index].classList.add('active');
        
        // 更新当前幻灯片索引
        currentPageSlide = index;
        
        console.log(`🖼️ 切换到页面展示图片 ${index + 1}/${pageSlides.length}`);
    }
    
    // 自动轮播函数 - 切换到下一张幻灯片
    function nextPageSlide() {
        // 计算下一张幻灯片的索引（循环播放）
        const nextSlide = (currentPageSlide + 1) % pageSlides.length;
        
        // 显示下一张幻灯片
        showPageSlide(nextSlide);
    }
    
    // 为每个控制圆点添加点击事件
    // 点击圆点可以手动切换到对应的幻灯片
    pageDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            console.log(`🎯 手动点击切换到图片 ${index + 1}`);
            showPageSlide(index);
        });
    });
    
    // 设置自动轮播定时器
    // 参数说明：4000 = 4秒切换一次，可根据需要调整
    // 修改建议：如需更快轮播，减小数值；如需更慢轮播，增大数值
    const slideInterval = setInterval(nextPageSlide, 4000);
    
    // 添加鼠标悬停暂停功能
    // 当鼠标悬停在展示栏上时，暂停自动轮播
    const pageHero = document.querySelector('.page-hero');
    if (pageHero) {
        pageHero.addEventListener('mouseenter', () => {
            console.log('⏸️ 暂停自动轮播（鼠标悬停）');
            clearInterval(slideInterval);
        });
        
        // 当鼠标离开展示栏时，恢复自动轮播
        pageHero.addEventListener('mouseleave', () => {
            console.log('▶️ 恢复自动轮播');
            // 重新设置定时器
            setInterval(nextPageSlide, 4000);
        });
    }
    
    console.log(`📄 页面展示栏初始化完成 - ${pageSlides.length}张图片，每4秒切换`);
}

// ==================== 文化展示栏轮播功能 ====================
// 功能说明：控制文化页面顶部图片展示栏的自动轮播
// 修改说明：如需调整轮播速度，修改setInterval的时间参数（单位：毫秒）
// 注意事项：图片数量变化时，需要同步更新HTML中的控制点数量
function initializeCultureSlider() {
    // 获取所有幻灯片元素
    const cultureSlides = document.querySelectorAll('.culture-slide');
    
    // 获取所有控制圆点元素
    const cultureDots = document.querySelectorAll('.culture-slider-dot');
    
    // 当前显示的幻灯片索引
    let currentCultureSlide = 0;
    
    // 显示指定索引的幻灯片
    // 参数：index - 要显示的幻灯片索引（从0开始）
    function showCultureSlide(index) {
        // 移除所有幻灯片的active类（隐藏所有图片）
        cultureSlides.forEach(slide => slide.classList.remove('active'));
        
        // 移除所有控制点的active类（重置所有圆点状态）
        cultureDots.forEach(dot => dot.classList.remove('active'));
        
        // 添加active类到指定幻灯片（显示当前图片）
        cultureSlides[index].classList.add('active');
        
        // 添加active类到对应控制点（激活当前圆点）
        cultureDots[index].classList.add('active');
        
        // 更新当前幻灯片索引
        currentCultureSlide = index;
        
        console.log(`🖼️ 切换到文化展示图片 ${index + 1}/${cultureSlides.length}`);
    }
    
    // 自动轮播函数 - 切换到下一张幻灯片
    function nextCultureSlide() {
        // 计算下一张幻灯片的索引（循环播放）
        const nextSlide = (currentCultureSlide + 1) % cultureSlides.length;
        
        // 显示下一张幻灯片
        showCultureSlide(nextSlide);
    }
    
    // 为每个控制圆点添加点击事件
    // 点击圆点可以手动切换到对应的幻灯片
    cultureDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            console.log(`🎯 手动点击切换到图片 ${index + 1}`);
            showCultureSlide(index);
        });
    });
    
    // 设置自动轮播定时器
    // 参数说明：4000 = 4秒切换一次，可根据需要调整
    // 修改建议：如需更快轮播，减小数值；如需更慢轮播，增大数值
    const slideInterval = setInterval(nextCultureSlide, 4000);
    
    // 添加鼠标悬停暂停功能
    // 当鼠标悬停在展示栏上时，暂停自动轮播
    const cultureHero = document.querySelector('.culture-hero');
    if (cultureHero) {
        cultureHero.addEventListener('mouseenter', () => {
            console.log('⏸️ 暂停自动轮播（鼠标悬停）');
            clearInterval(slideInterval);
        });
        
        // 当鼠标离开展示栏时，恢复自动轮播
        cultureHero.addEventListener('mouseleave', () => {
            console.log('▶️ 恢复自动轮播');
            // 重新设置定时器
            setInterval(nextCultureSlide, 4000);
        });
    }
    
    console.log(`🏛️ 文化展示栏初始化完成 - ${cultureSlides.length}张图片，每4秒切换`);
}

// 初始化模块动画效果
function initializeModuleAnimations() {
    const modules = document.querySelectorAll('.module-card');
    
    modules.forEach((module, index) => {
        // 添加延迟动画
        module.style.animationDelay = `${index * 0.1}s`;
        
        // 添加鼠标悬停效果
        module.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        module.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    console.log('🎨 模块动画效果初始化完成');
}

// 初始化平滑滚动
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('🔍 平滑滚动功能初始化完成');
}



// 加入我们表单
function openJoinForm() {
    alert('🚀 加入我们功能即将开放！\n请关注官方通知或联系客服。');
    console.log('📝 打开加入我们表单');
}

// 问题反馈表单
function openFeedbackForm() {
    alert('📮 感谢您的反馈！\n请发送邮件至: feedback@ganculture.com');
    console.log('📝 打开问题反馈表单');
}

// AI问答功能
function sendAIMessage() {
    const input = document.getElementById('ai-input');
    const message = input.value.trim();
    
    if (message) {
        console.log(`🤖 AI提问: ${message}`);
        
        // 模拟AI回复
        const responses = [
            '景德镇陶瓷起源于汉代，已有1700多年的制瓷历史。',
            '江西夏布采用天然苎麻为原料，手工织造，清凉透气。',
            '赣派茶叶包括庐山云雾茶、婺源绿茶、浮梁茶等品种。',
            '非遗保护需要法律支持和技术传承相结合。',
            '您可以参观当地的非遗博物馆了解更多信息。'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        alert(`AI助手回复：\n\n${randomResponse}`);
        input.value = '';
    }
}

// 快速提问
function askQuestion(question) {
    document.getElementById('ai-input').value = question;
    sendAIMessage();
}

// 文化详情展示
function showCultureDetail(type) {
    const details = {
        ceramic: {
            title: '景德镇陶瓷',
            content: '景德镇陶瓷以其\"白如玉、明如镜、薄如纸、声如磬\"的独特风格享誉世界。千年瓷都的制瓷技艺已被列入国家级非物质文化遗产名录。'
        },
        xiabu: {
            title: '江西夏布',
            content: '夏布是以苎麻为原料手工织造的平纹布，江西夏布制作技艺精湛，具有清凉、透气、抗菌等特点，是夏季服饰的理想面料。'
        },
        tea: {
            title: '赣派制茶',
            content: '江西茶叶制作技艺源远流长，赣派制茶注重传统工艺与现代技术的结合，生产的茶叶品质优良，香气独特，回味甘醇。'
        }
    };
    
    const detail = details[type];
    if (detail) {
        alert(`🏮 ${detail.title}\n\n${detail.content}`);
        console.log(`📖 查看文化详情: ${detail.title}`);
    }
}

// 产品标签切换
function switchProductTab(tabName) {
    console.log(`🛍️ 切换到产品标签: ${tabName}`);
    // 实际实现中这里会有标签切换逻辑
}

// 体验标签切换
function switchExperienceTab(tabName) {
    console.log(`🎯 切换到体验标签: ${tabName}`);
    // 实际实现中这里会有标签切换逻辑
}

// 添加控制台美化样式
const consoleStyles = `
    color: #fff;
    background: linear-gradient(135deg, #8b5a2b, #6d4c41);
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: bold;
`;

// 初始化语言切换功能
function initializeLanguageSwitcher() {
    // 从localStorage读取用户选择的语言，如果没有则默认中文
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'zh';
    currentLanguage = savedLanguage;
    
    // 创建语言切换按钮
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
        <button class="lang-btn ${currentLanguage === 'zh' ? 'active' : ''}" data-lang="zh">中文</button>
        <button class="lang-btn ${currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    `;
    
    // 将切换按钮添加到body
    document.body.appendChild(switcher);
    
    // 为语言按钮添加点击事件
    const langButtons = switcher.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // 应用初始语言
    updatePageContent(currentLanguage);
    
    console.log('🌐 语言切换功能初始化完成');
}

// 切换语言功能
function switchLanguage(lang) {
    if (lang === currentLanguage) {
        return; // 如果点击的是当前语言，不执行任何操作
    }
    
    // 更新当前语言
    currentLanguage = lang;
    
    // 保存用户选择到localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // 更新页面内容
    updatePageContent(lang);
    
    // 更新HTML的lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    console.log(`🌐 语言切换到 ${lang === 'zh' ? '中文' : 'English'}`);
}

// 更新页面内容
function updatePageContent(lang) {
    const texts = translations[lang];
    
    // 检测当前页面类型并更新标题
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop().replace('.html', '') || 'index';
    
    let pageTitle;
    switch(pageName) {
        case 'culture':
            pageTitle = lang === 'zh' ? texts.culturePageTitle : 'Intangible Cultural Heritage Gallery - Gan Goes Global';
            break;
        case 'products':
            pageTitle = lang === 'zh' ? texts.productsPageTitle : 'Premium Intangible Heritage Products - Gan Goes Global';
            break;
        case 'legal':
        case 'case-studies':
        case 'legal-new':
        case 'legal-provisions':
            pageTitle = lang === 'zh' ? texts.legalPageTitle : 'Legal Protection Service Station - Gan Goes Global';
            break;
        default:
            pageTitle = lang === 'zh' ? '夏织赣韵——法护出海"布"掉队 - Weaving Gan\'s Charms Overseas with Legal Protection' : 'Weaving Gan\'s Charms Overseas with Legal Protection - 夏织赣韵——法护出海"布"掉队';
    }
    document.title = pageTitle;
    
    // 更新导航栏
    const navTitle = document.querySelector('.nav-logo h1');
    const navSubtitle = document.querySelector('.nav-logo span');
    const taglines = document.querySelectorAll('.tagline');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navTitle) navTitle.textContent = texts.navTitle;
    if (navSubtitle) navSubtitle.textContent = texts.navSubtitle;
    if (taglines[0]) taglines[0].textContent = texts.tagline1;
    if (taglines[1]) taglines[1].textContent = texts.tagline2;
    
    // 更新导航菜单
    if (navLinks[0]) navLinks[0].textContent = texts.home;
    if (navLinks[1]) navLinks[1].textContent = texts.about;
    if (navLinks[2]) navLinks[2].textContent = texts.contact;
    
    // 更新英雄区域
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroTitle) heroTitle.textContent = texts.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = texts.heroSubtitle;
    
    // 更新模块区域
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) sectionTitle.textContent = texts.exploreTitle;
    
    // 更新模块卡片
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach((card, index) => {
        const cardTitle = card.querySelector('h3');
        const cardDesc = card.querySelector('p');
        const cardBadge = card.querySelector('.module-badge');
        
        if (index === 0) { // 文化模块
            if (cardTitle) cardTitle.textContent = texts.cultureTitle;
            if (cardDesc) cardDesc.textContent = texts.cultureDesc;
            if (cardBadge) cardBadge.textContent = texts.cultureBadge;
        } else if (index === 1) { // 产品模块
            if (cardTitle) cardTitle.textContent = texts.productsTitle;
            if (cardDesc) cardDesc.textContent = texts.productsDesc;
            if (cardBadge) cardBadge.textContent = texts.productsBadge;
        } else if (index === 2) { // 法律模块
            if (cardTitle) cardTitle.textContent = texts.legalTitle;
            if (cardDesc) cardDesc.textContent = texts.legalDesc;
            if (cardBadge) cardBadge.textContent = texts.legalBadge;
        }
    });
    
    // 更新返回按钮
    const backLinks = document.querySelectorAll('.back-link');
    backLinks.forEach(link => {
        if (link.textContent.includes('返回') || link.textContent.includes('Back')) {
            link.textContent = texts.backToService;
        }
    });
    
    // 更新底部区域
    const footerColumns = document.querySelectorAll('.footer-column');
    footerColumns.forEach((column, index) => {
        const columnTitle = column.querySelector('h4');
        const columnDesc = column.querySelector('p');
        const columnBtn = column.querySelector('button');
        
        if (index === 0) { // 加入我们
            if (columnTitle) columnTitle.textContent = texts.joinUs;
            if (columnDesc) columnDesc.textContent = texts.joinDesc;
            if (columnBtn) columnBtn.textContent = texts.joinNow;
        } else if (index === 1) { // 问题反馈
            if (columnTitle) columnTitle.textContent = texts.feedback;
            if (columnDesc) columnDesc.textContent = texts.feedbackDesc;
            if (columnBtn) columnBtn.textContent = texts.submitFeedback;
        } else if (index === 2) { // 联系我们
            if (columnTitle) columnTitle.textContent = texts.contactUs;
            const paragraphs = column.querySelectorAll('p');
            if (paragraphs[0]) paragraphs[0].textContent = texts.contactEmail;
            if (paragraphs[1]) paragraphs[1].textContent = texts.contactPhone;
        }
    });
}

// 初始化导航栏滚动效果
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) {
        console.log('ℹ️ 未找到导航栏元素');
        return;
    }
    
    // 监听页面滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    console.log('🎯 导航栏滚动效果初始化完成');
}

console.log('%c🏮 赣韵出海·法护三遗', consoleStyles);
console.log('%c🎯 非遗文化数字化平台', consoleStyles);
console.log('%c✨ 传承 · 创新 · 保护 · 发展', consoleStyles);