function menuTree(){
    let menuTree = {
        menuTitle : "一级菜单",
        menuId : "L0001",
        children:[
            {
                menuTitle:"一级内部菜单--一",
                menuId:"001"
            },
            {
                menuTitle:"一级内部菜单--二",
                menuId:"002"
            }
        ]
    }
    return menuTree
}

export default menuTree