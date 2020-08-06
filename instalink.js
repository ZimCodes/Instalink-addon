let posts = 0;
//
function instaposts() {
    const post_link_elems = document.querySelectorAll("div._bz0w a");//<a> tags for posts

    if (posts < post_link_elems.length) {
        console.clear();//clear console window

        const offset = 1;//index offset(for counting)
        posts = post_link_elems.length;//set the current # of posts loaded

        const host = location.origin;// 'https://www.instagram.com'

        for(let i = 0;i < post_link_elems.length;i++){
            const pathname_link = post_link_elems[i].getAttribute('href');// '/p/[posturl]'
            post_link_elems[i].setAttribute('href',`${host}${pathname_link}`);//'https://www.instagram.com/p/[posturl]'

            console.log(`${i+offset} ${host}${pathname_link}`);//logs all post links
        }
    }
}
document.addEventListener('scroll',instaposts);
