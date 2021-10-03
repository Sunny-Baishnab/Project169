AFRAME.registerComponent('marker-handler',{
    init:async function(){
        this.el.addEventListener('markerFound',()=>{
            this.handleMarkerFound()
        })

        this.el.addEventListener('markerLost',()=>{
            this.handleMarkerLost()
        })
    },

    handleMarkerFound:function(){
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'flex'

        var orderButton = document.getElementById('order-button')
        orderButton.addEventListener('click',()=>{
            swal({
                title:'Ordered Sucessfully',
                text:'Your Order will be Delivered Shortly',
                icon:'success',
                timer:2000,
                buttons:false
            })
        })

        var orderSummaryButton = document.getElementById('order-summary-button')
        orderSummaryButton.addEventListener('click',()=>{
            swal({
                title:'Work in Progress',
                text:'order summary',
                icon:'warning',
                timer:2000,
                buttons:false
            })
        })
    },

    handleMarkerLost:function(){
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'none'
    }
})