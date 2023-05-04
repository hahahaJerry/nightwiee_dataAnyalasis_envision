package secondsort;

import org.apache.hadoop.io.WritableComparable;
import org.apache.hadoop.io.WritableComparator;

/**
 * 自定义key的排序比较器，调用组合key类的比较方法
 */

public class SortComparatorByComboKey extends WritableComparator {
	public SortComparatorByComboKey() {
        super(ComboKeyByDesTemp.class,true);
    }
 
    @Override
    public int compare(WritableComparable a, WritableComparable b) {
    	ComboKeyByDesTemp k1 = (ComboKeyByDesTemp) a;
    	ComboKeyByDesTemp k2 = (ComboKeyByDesTemp) b;
        return k1.compareTo(k2);
    }
}
