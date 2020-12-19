import java.util.ArrayList;
import java.util.LinkedList;

public class Post {
	
	private User author;
	private String content;
	
	private ArrayList<Post> replies;

	public Post(User author, String content) {
		this.author=author;
		this.content=content;
	}
}
