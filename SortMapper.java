package secondsort;

import java.io.IOException;

import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.NullWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;


public class SortMapper extends Mapper<LongWritable, Text, ComboKeyByDesTemp, NullWritable>{
	public void map(LongWritable ikey, Text ivalue, Context context) throws IOException, InterruptedException {
		String [] valueStrings=ivalue.toString().split(",");
		
		if(valueStrings.length>2)
		{
			String time=valueStrings[0];
			String id=valueStrings[1];
			String jing = valueStrings[2];
			String wei = valueStrings[3];
			String traffic = valueStrings[4];
			//System.out.println(time+" "+id+" "+jing+" "+wei);
			ComboKeyByDesTemp cmByYearTemp=new ComboKeyByDesTemp(time,id,jing,wei,traffic);
			context.write(cmByYearTemp, NullWritable.get());
		}
	}
}
