package secondsort;

import org.apache.hadoop.io.NullWritable;
import org.apache.hadoop.mapreduce.Partitioner;


public class SortPartitioner extends Partitioner<ComboKeyByDesTemp, NullWritable>{
	@Override
	public int getPartition(ComboKeyByDesTemp arg0, NullWritable arg1, int arg2) {
		return 0;
	}
}
