package secondsort;

import org.apache.hadoop.io.WritableComparable;
import org.apache.hadoop.io.WritableComparator;


/**
 * 根据年份进行分组
 * 年份递增
 */
public class GroupByDes extends WritableComparator {
	protected GroupByDes() {
        super(ComboKeyByDesTemp.class, true);
    }
	
	@Override
    public int compare(WritableComparable a, WritableComparable b) {
    	ComboKeyByDesTemp k1 = (ComboKeyByDesTemp)a ;
    	ComboKeyByDesTemp k2 = (ComboKeyByDesTemp)b ;
    	if(k1.getId().equals(k2.getId()))
    		return 0;
    	else return -1;
    }
}
