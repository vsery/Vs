export default {
    namespaced: true,
    state: {
        //商品列表
        shop_list: [
            { id: 11, name: '鱼香肉丝', price: 12, },
            { id: 22, name: '宫保鸡丁', price: 14 }, 
            { id: 34, name: '土豆丝', price: 10 }, 
            { id: 47, name: '米饭', price: 2 }
        ],

        //添加到购物车的商品（已选商品）
        added: []
    },
    // actions: {
    //     load(){
    //         return shop_list;
    //     }
    // },
    // mutations: {},
}