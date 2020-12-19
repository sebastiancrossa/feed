import java.util.Hashtable;

public class UserNetwork {
	
	protected Hashtable<String, User> users = new Hashtable();
	
	public void addUser(User user) {
		users.put(user.getUsername(), user);
	}
	
	public void removeUser(User user) {
		if(this.users.contains(user)) {
			users.remove(user.getUsername(), user);
		}else{
			System.out.println("This user does not exist");
		}
	}
	
}
