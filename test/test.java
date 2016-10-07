import java.io.*;
import java.util.*;

public class test{
  public static void main(String args[]){
      String a = "hello";
      String aUp = a.toUpperCase();
      String b = " world";
      int aLen = a.length();
      StringBuffer dd = new StringBuffer("abcde");
      // Scanner jin = new Scanner;
      // while(jin.hasNextInt()){
      //   int a = jin.nextInt();
      // }
      String c = a + b + "!";
      int[] arr = new int[3];
      int[] arr1 = {1,4};
      int[] arr2 = {2,3,8,4,12};
      int[] arr3 = arr2;
      int[] arr4 = new int[arr2.length];
      for (int i=0;i<arr2.length;i++ ) {
        arr4[i] = arr2[i];
      }
      Arrays.sort(arr2);
      System.out.println(arr[0]+""+arr[1]+""+arr[2]);
      System.out.println(arr2[0]+""+arr2[1]+""+arr2[2]);
      System.out.println(arr[0]);
      System.out.println(c.charAt(0));
      System.out.println(dd);
      System.out.println(dd.charAt(1));
      System.out.println(dd.substring(0,1).toUpperCase());
      System.out.println(dd);

      System.out.println(aUp);
      System.out.println(a.substring(1,2));
      System.out.println(a.toCharArray()[1]);
      System.out.println(aLen);
      System.out.println(a.startsWith("h"));
      System.out.println(a.concat(b));
      System.out.println(a+b);
      System.out.println(Arrays.toString(arr1));
      System.out.println(Arrays.toString(arr2));
      System.out.println(Arrays.toString(arr3));
      System.out.println(Arrays.toString(arr4));
      // System.out.println(ArrayUtils.addAll(str1,str2));
    }
}
