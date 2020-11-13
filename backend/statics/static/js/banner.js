;(function(){
    const banner = document.getElementById('bannerSwiper')
    if (banner) {
        myajax({
            url: 'http://localhost:3010/getBanner',
            success: (res) => {
                if (Array.isArray(res)) {
                    let liStr = ''
                    res.forEach(ban => {
                        if (ban.wapurl) {
                            let linkStr = ban.waplink ? 
                                        '<a href="'+ ban.waplink +'"><img src="' + ban.wapurl +'"></a>' :
                                        '<img src="' + ban.wapurl +'">'
                            liStr += '<li class="swiper-slide">' + linkStr + '</li> \r\n'
                        }
                    })
                   banner.innerHTML = liStr
                   new Swiper('.bannerSwiper', {
                        autoplay: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    })
                }
            }
        })
    }
})()