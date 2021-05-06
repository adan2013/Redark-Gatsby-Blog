import React from "react"
import RecommendedPostsWidget from "../widgets/recommendedPosts"
import NewPostsWidget from "../widgets/newPosts"
import RandomPostsWidget from "../widgets/randomPosts"
import CategoriesWidget from "../widgets/categories"
import TagsWidget from "../widgets/tags"
import SocialWidget from "../widgets/social"
import AdSenseSidebar from "./adSenseSidebar"
import { SidebarBanner } from "../components/banner"

const Sidebar = ({hideNewPosts}) => {

  return (
    <aside>
      <RecommendedPostsWidget/>
      {!hideNewPosts && <NewPostsWidget/>}
      <RandomPostsWidget/>
      <CategoriesWidget/>
      <TagsWidget/>
      <SocialWidget/>
      <SidebarBanner/>
      <AdSenseSidebar/>
    </aside>
  )
}

export default Sidebar
