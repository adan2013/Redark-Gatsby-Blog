import React from "react"
import NewPostsWidget from "../widgets/newPosts"
import RandomPostsWidget from "../widgets/randomPosts"
import CategoriesWidget from "../widgets/categories"
import TagsWidget from "../widgets/tags"
import SocialWidget from "../widgets/social"

const Sidebar = () => {

  return (
    <aside>
      <NewPostsWidget/>
      <RandomPostsWidget/>
      <CategoriesWidget/>
      <TagsWidget/>
      <SocialWidget/>
    </aside>
  )
}

export default Sidebar
