import React from "react"
import NewPostsWidget from "../widgets/newPosts"
import RecommendedPostsWidget from "../widgets/recommendedPosts"
import CategoriesWidget from "../widgets/categories"
import TagsWidget from "../widgets/tags"
import SocialWidget from "../widgets/social"

const Sidebar = ({hideNewPosts}) => {

  return (
    <aside>
      {!hideNewPosts && <NewPostsWidget/>}
      <RecommendedPostsWidget/>
      <CategoriesWidget/>
      <TagsWidget/>
      <SocialWidget/>
    </aside>
  )
}

export default Sidebar
