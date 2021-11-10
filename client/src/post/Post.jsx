import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" alt="post" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum, dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, dolorum quos voluptatem officia laborum perspiciatis nam placeat quas, numquam obcaecati at error ipsum molestiae tempora dolores modi quo. Hic, accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, dolorum quos voluptatem officia laborum perspiciatis nam placeat quas, numquam obcaecati at error ipsum molestiae tempora dolores modi quo. Hic, accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, dolorum quos voluptatem officia laborum perspiciatis nam placeat quas, numquam obcaecati at error ipsum molestiae tempora dolores modi quo. Hic, accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, dolorum quos voluptatem officia laborum perspiciatis nam placeat quas, numquam obcaecati at error ipsum molestiae tempora dolores modi quo. Hic, accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, dolorum quos voluptatem officia laborum perspiciatis nam placeat quas, numquam obcaecati at error ipsum molestiae tempora dolores modi quo. Hic, accusamus.</p>
        </div>
    )
}
