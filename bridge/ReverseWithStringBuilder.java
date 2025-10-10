public class ReverseWithStringBuilder {
    public static void main(String[] args) {
        String str = "hello";

     
        StringBuilder sb = new StringBuilder(str);

       
        sb.reverse();

       
        String reversed = sb.toString();

        System.out.println(reversed); 
    }
}
