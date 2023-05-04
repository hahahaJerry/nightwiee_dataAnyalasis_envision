package secondsort;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import org.apache.hadoop.io.WritableComparable;

public class ComboKeyByDesTemp implements WritableComparable<ComboKeyByDesTemp> {
	private String time;
	private String id;
	private String jing;
	private String wei;
	private String traffic;
	
	
	@Override
	public void readFields(DataInput in) throws IOException {
		time=in.readUTF();
		id=in.readUTF();
		jing=in.readUTF();
		wei=in.readUTF();
		traffic=in.readUTF();
	}
	@Override
	public void write(DataOutput out) throws IOException {
		out.writeUTF(time);
		out.writeUTF(id);
		out.writeUTF(jing);
		out.writeUTF(wei);
		out.writeUTF(traffic);
	}
	
	@Override
	public int compareTo(ComboKeyByDesTemp o) {
		if(this.id.equals(o.id))
		{
			return this.time.compareTo(o.time);
		}
		else
		{
			return this.id.compareTo(o.id);
		}
	}
	
	public ComboKeyByDesTemp() {
		// TODO Auto-generated constructor stub
	}
	public ComboKeyByDesTemp(String time,String id,String jing,String wei,String traffic) {
		this.time=time;
		this.id=id;
		this.jing=jing;
		this.wei=wei;
		this.traffic = traffic;
	}
	
	@Override
	public String toString() {
		return "("+time+","+jing+","+wei+","+traffic+")";
	}
	
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getJing() {
		return jing;
	}
	public void setJing(String jing) {
		this.jing = jing;
	}
	public String getWei() {
		return wei;
	}
	public void setWei(String wei) {
		this.wei = wei;
	}
	public String getTraffic() {
		return traffic;
	}
	public void setTraffic(String traffic) {
		this.traffic = traffic;
	}
}
