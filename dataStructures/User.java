import java.util.ArrayList;
import java.util.Stack;

public class User extends UserNetwork{
	
	private ArrayList<User> friendList=new ArrayList<User>();
	private ArrayList<Post> userPosts=new ArrayList<Post>();
	
	private long userId;
	private String username;
	private String password;
	
	private String name;
	private int age;
	
	public User(String username, String password, String confPassword, int age, String name) {
		
		if(!super.users.contains(username)) {
			this.username=username;
		}
		
		if(password.equals(confPassword)) {
			this.password=password;
		}
		
		this.age=age;
		this.name=name;
		
	}
	
	public void postToFeed(String content, String username) {
		Post post=new Post(super.users.get(this.username), content);
		userPosts.add(post);
	}
	
	
	public ArrayList<User> getFriendList() {
		return friendList;
	}
	public void setFriendList(ArrayList<User> friendList) {
		this.friendList = friendList;
	}
	public ArrayList<Post> getUserPosts() {
		return userPosts;
	}
	public void setUserPosts(ArrayList<Post> userPosts) {
		this.userPosts = userPosts;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}

}
