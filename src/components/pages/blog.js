import React, {Component} from 'react'
import CarouselImage from './../carousel';
import Navbar from './../navbar';
import Blogs from './../blog-card';
class Blog extends Component {
  render() {
    var date = new Date()
    var blogs = JSON.parse(window.localStorage.blogs || "[]")
    var blogsArr = []
    for (var i = 0; i < blogs.length; i++) {
      blogsArr.push(<Blogs title={blogs[i].title} content={blogs[i].content} date={blogs[i].date} />)
    }
    console.log(blogsArr)
    return (
      <div className="blog">
        <div class="blur-back"></div>

      <div class="flex-nav">
        <Navbar/>
      </div>
      <div className="flex-carousel uk-position-relative">
        <div class="blur-background"></div>
        <CarouselImage/>

      </div>
      <br />
      <br />
      <div class="uk-margin uk-position-relative">
        <h1 class="uk-text-center">Drag and Rearrange</h1>
      </div>
      <div id="item" class="uk-child-width-1-3@s blogs uk-text-center uk-padding-small
        uk-margin-large"  uk-sortable uk-grid="uk-grid">


        <Blogs/>

      <Blogs/>
      <Blogs/>
      <Blogs/>

    <Blogs/>
    <Blogs/>
    {blogsArr}
    </div>
    </div>);
  }
}
export default Blog;
