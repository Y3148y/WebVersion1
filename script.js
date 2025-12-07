// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializePageSlider(); // 新增：初始化通用页面轮播
    initializeCultureSlider();
    initializeModuleAnimations();
    initializeSmoothScrolling();
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

console.log('%c🏮 赣韵出海·法护三遗', consoleStyles);
console.log('%c🎯 非遗文化数字化平台', consoleStyles);
console.log('%c✨ 传承 · 创新 · 保护 · 发展', consoleStyles);