package secondsort;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.NullWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;


public class Driver {
	public static void main(String[] args) throws Exception {
		Configuration conf = new Configuration();
		conf.set("fs.defaultFS","hdfs://localhost:9000");
		
		Job job=Job.getInstance(conf);			//创建一个job
    	job.setJarByClass(Driver.class);				//设置主类
    	job.setMapperClass(SortMapper.class);		//设置map类
    	job.setReducerClass(SortReducer.class);	//设置reduce类
    	
    	job.setMapOutputKeyClass(ComboKeyByDesTemp.class);			//设置map输出key的类型
    	job.setMapOutputValueClass(NullWritable.class);	//设置map输出value的类型
    	/*
    	 * 设置combiner操作，combiner是map操作中的一部分
    	 * 目的：提升IO，提高作业执行的性能
    	 * 局限性：求平均数
    	 */
    	//job.setCombinerClass(AccessReduce.class);
    	job.setPartitionerClass(SortPartitioner.class);	//设置自定义partitioner
    	job.setNumReduceTasks(1);							//设置reduce分区数
    	job.setOutputKeyClass(Text.class);				//设置reduce输出key的类型
    	job.setOutputValueClass(Text.class);		//设置reduce输出value的类型
        //job设置分组类
        job.setGroupingComparatorClass(GroupByDes.class);
        //job设置排序类
        job.setSortComparatorClass(SortComparatorByComboKey.class);
        
        //job.setPartitionerClass(SortPartitioner.class);	//设置自定义partitioner
    	//job.setNumReduceTasks(114);							//设置reduce分区数
    
        FileSystem fs = FileSystem.get(conf);
    	FileInputFormat.setInputPaths(job, new Path("/hadoop/fuwu01/input"));	//设置输入路径
    	Path path = new Path("/hadoop/fuwu01/output02");
        if (fs.exists(path))//如果目录存在，则删除目录
        {
            fs.delete(path, true);
        }
    	FileOutputFormat.setOutputPath(job, path);	//设置输出路径
    	FileOutputFormat.setOutputPath(job, path);	//设置输出路径
    	
    	boolean result=job.waitForCompletion(true);		//提交
    	System.exit(result?0:-1); 						//退出
	}
}
