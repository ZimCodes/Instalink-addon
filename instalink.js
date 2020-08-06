let max_posts = 0;//Max # of posts currently loaded on page

/*Attach links to all public posts
* */
function instaposts() {
    const post_link_elems = document.querySelectorAll("div._bz0w a");//Post Elements
    //Check if the current post loaded is equal to the previous post count
    if(max_posts !== post_link_elems.length){
        max_posts = post_link_elems.length;//set new current max posts
        const host = location.origin;// 'https://www.instagram.com'

        for(let i = 0;i < post_link_elems.length;i++){
            const pathname_link = post_link_elems[i].getAttribute('href');//link of current post

            //Check if post link includes the full url path to the post
            if(!pathname_link.includes(host)){
                post_link_elems[i].setAttribute('href',`${host}${pathname_link}`);//'https://www.instagram.com/p/[posturl]'
                post_link_elems[i].addEventListener('click',goToPosts);//add click event to post
            }
        }
    }
}
/*
Opens a post in a new tab.
* */
function goToPosts(e){
    window.open(this.getAttribute('href'));
}

/*
* Remove Sign-Up/Sign-In Modal Element
* */
function removeSignUp(){
    const sign_up_modal = document.querySelector('div.RnEpo');
    if(sign_up_modal){
        sign_up_modal.remove();
    }
}
/*
* Enable Scrolling!
* --By default, when the sign-up/in modal appears, scrolling is automatically disabled.
* This function enables it again
* */
function enableScroll(){
    const body_element = document.body;
    if(body_element.style.overflow){
        document.body.style.removeProperty("overflow");
    }

}
//Event Handlers
document.addEventListener('scroll',instaposts);
document.addEventListener('click',removeSignUp);
document.addEventListener('mouseover',removeSignUp);
document.addEventListener('mouseover',enableScroll);