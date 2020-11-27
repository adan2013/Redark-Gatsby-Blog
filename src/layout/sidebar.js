import React from "react"
import RecommendedPostsWidget from "../widgets/recommendedPosts"
import NewPostsWidget from "../widgets/newPosts"
import RandomPostsWidget from "../widgets/randomPosts"
import CategoriesWidget from "../widgets/categories"
import TagsWidget from "../widgets/tags"
import SocialWidget from "../widgets/social"
import AdSenseSidebar from "./adSenseSidebar"

const Sidebar = ({hideNewPosts}) => {

  return (
    <aside>
      <RecommendedPostsWidget/>
      {!hideNewPosts && <NewPostsWidget/>}
      <RandomPostsWidget/>
      <CategoriesWidget/>
      <TagsWidget/>
      <SocialWidget/>
      <AdSenseSidebar/>
    </aside>
  )
}

export default Sidebar
