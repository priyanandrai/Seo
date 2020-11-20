package com.seo.Onpagefactor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class GetMetadata {

	
	static Pattern Title = Pattern.compile("<title>(.*?)</title>");
	 public static String meta_title(String largeText){
		 String title = "";
		 Matcher mtch = Title.matcher(largeText);
		 try {
			 mtch.find();
				
				title = mtch.group(1);
		} catch (Exception e) {
			String match = null;
			return match;
		}
		return title;
	 }
	 
	 static Pattern meta_description = Pattern.compile("meta name=\"description\" content=\"(.*?)\"/>");
	 public static String Description(String largeText){
		 String des = "";
		 Matcher mtch = meta_description.matcher(largeText);
		 
		 try {
			 mtch.find(); 
			 des = mtch.group(1);
		} catch (Exception e) {
			String match = null;
			return match;
		}
		return des;
	 }
	@SuppressWarnings("resource")
	public static void main(String[] args) throws InterruptedException, IOException 
	{		

		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your URL string ");
		String url = sc.nextLine();
		
		String data = Meta_data(url);
		System.out.println(data);
	}
	@SuppressWarnings("unused")
	public static String Meta_data(String url) throws IOException, InterruptedException 
	{
		String Description = null;
		String host_name = null;
		String Domain = null;
		String output = null;
		
		Pattern ptn = Pattern.compile("(.*?)//(.*?)(/|$)");
		Matcher mtch = ptn.matcher(url);
		mtch.find();
		
			host_name = mtch.group(1);
			 Domain = mtch.group(2);
		URL obj = new URL(host_name  +"//" + Domain + "/");
		try
		{
			
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();

			con.setRequestMethod("GET");
			
			boolean redirect = false;

			int status = con.getResponseCode();
			if (status != HttpURLConnection.HTTP_OK) {
			if (status == HttpURLConnection.HTTP_MOVED_TEMP || status == HttpURLConnection.HTTP_MOVED_PERM
			|| status == HttpURLConnection.HTTP_SEE_OTHER)
			redirect = true;
			}

			if (redirect) {

			String newUrl = con.getHeaderField("Location");
			
			con = (HttpURLConnection) new URL(newUrl).openConnection();
			con.addRequestProperty("Accept-Language", "en-US,en;q=0.8");
			con.addRequestProperty("User-Agent", "Mozilla");
			}
			int responseCode = con.getResponseCode();
			if (responseCode == 200) 
			{
			
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();

				while ((inputLine = in.readLine()) != null) 
				{
					response.append(inputLine + "\n");
				}
				in.close();

				String var = response.toString(); 
				String  title = ((meta_title(var)));
				Description = ((Description(var)));
				if(title!=null&&Description!=null)
				{
					int title_len = title.length();
					int description_len = Description.length();
					output= "{\r\n" + 
							"\"MetaTile\":{\r\n" + 
							"  \"status\": \"Found\",\r\n" + 
							"  \"content\":\""+title+"\",\r\n" + 
							"  \"length\":\""+title_len+"\"\r\n" + 
							"},"+"\n\"MetaDescription\":{\r\n" + 
							"  \"status\": \"Found\",\r\n" + 
							"  \"content\":\""+Description+"\",\r\n" + 
							"  \"length\":\""+description_len+"\"\r\n" + 
							"}\r\n" + 
							"}";
				;
				}
				else if(title!=null&&Description==null)
				{
					int title_len = title.length();
					output= "{\r\n" + 
							"\"MetaTile\":{\r\n" + 
							"  \"status\": \"Found\",\r\n" + 
							"  \"content\":\""+title+"\",\r\n" + 
							"  \"length\":\""+title_len+"\"\r\n" + 
							"},"+"\n\"MetaDescription\":{\r\n" + 
							"  \"status\": \"Not Found\",\r\n" + 
							"  \"content\":\"N/A\",\r\n" + 
							"  \"length\":\"N/A\"\r\n" + 
							"}\r\n" + 
							"}";
				}
				else if(title==null&&Description!=null)
				{
					int description_len = Description.length();
					output= "{\r\n" + 
							"\"MetaTile\":{\r\n" + 
							"  \"status\": \"Not Found\",\r\n" + 
							"  \"content\":\"N/A\",\r\n" + 
							"  \"length\":\"N/A\"\r\n" + 
							"},"+"\n\"MetaDescription\":{\r\n" + 
							"  \"status\": \"Found\",\r\n" + 
							"  \"content\":\""+Description+"\",\r\n" + 
							"  \"length\":\""+description_len+"\"\r\n" + 
							"}\r\n" + 
							"}";
				}
				else
				{
					output= "{\r\n" + 
							"\"MetaTile\":{\r\n" + 
							"  \"status\": \" Not Found\",\r\n" + 
							"  \"content\":\"N/A\",\r\n" + 
							"  \"length\":\"N/A\"\r\n" + 
							"},"+"\n\"MetaDescription\":{\r\n" + 
							"  \"status\": \"Not Found\",\r\n" + 
							"  \"content\":\"N/A\",\r\n" + 
							"  \"length\":\"N/A\"\r\n" + 
							"}\r\n" + 
							"}";
				}
					
			}
		}
		catch (Exception e) {
			//System.out.println("write something wrong");
		}
		return output;
}
}	
	
	
	

