// 模拟菜单数据
const menuData = [
    { category: '鸡肉', name: '香菇蒸滑鸡', price: 25, img: 'assets/images/香菇蒸滑鸡.jpg' },
    { category: '牛肉', name: '红烧牛肉', price: 30, img: 'assets/images/红烧牛肉.jpg' },
    { category: '素菜', name: '炒青菜', price: 10, img: 'assets/images/vegetable.jpg' },
    { category: '鸡肉', name: '黄焖鸡', price: 28, img: 'assets/images/chicken2.jpg' }
];

let currentCategory = '鸡肉';

// 渲染菜单
function renderMenu() {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';

    const filteredMenu = menuData.filter(item => item.category === currentCategory);
    filteredMenu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>价格：¥${item.price}</p>
            </div>
            <button onclick="addToOrder('${item.name}', ${item.price})">+</button>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// 切换分类
function filterMenu(event) {
    // 获取当前点击的分类名称
    const category = event.target.getAttribute('data-category');
    currentCategory = category;

    // 移除所有分类的 "active" 样式
    document.querySelectorAll('.categories li').forEach(li => li.classList.remove('active'));

    // 给当前点击的分类添加 "active" 样式
    event.target.classList.add('active');

    // 重新渲染菜单
    renderMenu();
}

// 页面切换
function showPage(event) {
    // 获取目标页面的 ID
    const targetPage = event.target.getAttribute('data-page');

    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // 显示目标页面
    document.getElementById(targetPage).classList.add('active');
}

// 示例订单数据
let orderData = [];

// 添加到订单
function addToOrder(name, price) {
    // 更新订单数据
    orderData.push({ name, price });

    // 更新订单列表
    const orderList = document.getElementById('order-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ¥${price}`;
    orderList.appendChild(listItem);

    // 更新总价格
    const totalPrice = orderData.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice;

    alert(`已添加 ${name} 到订单！`);
}


// 页面初始化
renderMenu();

