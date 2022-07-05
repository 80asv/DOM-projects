const d = document,
    n = navigator,
    ua = n.userAgent;


export default function userAgent(id){
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () =>  ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function() {
                return this.android() || this.ios() || this.windows();
            },
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac/i),
            windows: () => ua.match(/windows nt/i),
            any: function() {
                return this.linux() || this.mac() || this.windows();
            }
        },

        isBrowser={
            chrome:()=>ua.match(/chrome/i),
            safari:()=>ua.match(/safari/i),
            firefox:()=>ua.match(/firefox/i),
            opera:()=>ua.match(/operalopera mini/i),
            ie:()=>ua.match(/msieliemobile/i),
            edge:()=>ua.match(/edge/i),
            any:function(){
                return(
                    this.ie() ||
                    this.edge() ||
                    this.chrome()||
                    this.safari() ||
                    this.firefox() ||
                    this.opera()
                );
            },
        };


    $id.innerHTML = `
    <table class="tg">
        <tbody>
            <tr>
                <td class="tg-0lax">User agent</td>
                <td class="tg-0lax">${ua}</td>
            </tr>
            <tr>
                <td class="tg-0lax">Device</td>
                <td class="tg-0lax">${isMobile.any() ? isMobile.any() : isDesktop.any()}</td>
            </tr>
            <tr>
            <td class="tg-0lax">Browser</td>
                <td class="tg-0lax">${isBrowser.any()}</td>
            </tr>
        </tbody>
    </table>
    `





    console.log(ua);
}


