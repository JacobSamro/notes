function processOrderList(orderList, orderId, state) {
    // Write your code here
    
    const index = orderList.findIndex(order => order.id === orderId)
    
    if(index === -1) {
        return orderList
    }
    
    if(state === 'Processing') {
        orderList[index].state = 'Processing'
    } else if ( state == 'Delivered') {
        orderList.splice(index, 1)
    }
    
    return orderList
    
}