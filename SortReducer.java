package secondsort;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.hadoop.io.NullWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

import sun.security.ssl.KerberosClientKeyExchange;

public class SortReducer extends Reducer<ComboKeyByDesTemp, NullWritable, Text, Text> {
	
public void reduce(ComboKeyByDesTemp _key, Iterable<NullWritable> values, Context context) throws IOException, InterruptedException {
		Iterator<NullWritable>iterator=values.iterator();
		
		List<String>list=new ArrayList<String>();
		
		while (iterator.hasNext()) {
			iterator.next();
			list.add(_key.toString());
		}
		
		int cnt=0;
		String ans2="[";
		
		for(int i=0;i<list.size();i++)
		{
			String str=list.get(i);
			ans2+=str;
			ans2+=",";
			cnt++;
			// 去重
			while(i+1<list.size()&&str.equals(list.get(i+1)))
				i++;
			
//			if(cnt==30)
//			{
//				if(ans2.lastIndexOf(",")==ans2.length()-1)
//					ans2=ans2.substring(0,ans2.lastIndexOf(","));
//				ans2+="],";
//				if((!ans2.equals("[],"))&&cnt>1)
//					context.write(NullWritable.get(), new Text(ans2));
//				
//				cnt=0;
//				ans2="[";
//			}
		}
		
		if(ans2.lastIndexOf(",")==ans2.length()-1)
			ans2=ans2.substring(0,ans2.lastIndexOf(","));
		
		ans2+="],";
		//System.out.println(ans2);
		if((!ans2.equals("[],"))&&cnt>1)
			context.write(new Text(_key.getId()), new Text(ans2));
	}
}
