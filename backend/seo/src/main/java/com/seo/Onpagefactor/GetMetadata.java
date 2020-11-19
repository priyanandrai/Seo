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

	
//	public static List<String> MetaTitle(String url) throws IOException, InterruptedException 
//	{
//			List<String> meta = new ArrayList<String>();
//
//
//		{
//			URL obj = new URL(url);
//			HttpURLConnection con = (HttpURLConnection) obj.openConnection();
//
//			con.setRequestMethod("GET");
//
//			con.setRequestProperty("User-Agent", "Mozilla/5.0");
//
//			int responseCode = con.getResponseCode();
//			System.out.println(responseCode);
//			if (responseCode == 200) 
//			{
//			
//				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
//				String inputLine;
//				StringBuffer response = new StringBuffer();
//
//				while ((inputLine = in.readLine()) != null) 
//				{
//					response.append(inputLine + "\n");
//				}
//				in.close();
//
//				String var = response.toString();
//				meta.add((Metadata(var)));
//			} 
//			else 
//			{
//				System.out.println(responseCode);
//			}
//		}
//		System.out.println(meta);
//		return meta;
//	}
//	
//	
//	public static String Metadata (String largeText)
//	
//	{
//		
//		final Pattern title_pattern = Pattern.compile("<title>(.*?)</title>");
//		String titledata = "not found";
//		if (title_pattern != null)
//		{		
//		Matcher mtch = title_pattern.matcher(largeText);
//		String title  = mtch.group(1);
//		
//		titledata = " \"Metatile\":\r\n" + 
//				"  {\r\n" + 
//				"    \"status\":\"found\",\r\n" + 
//				"    \"length\":"+title.length()+",\r\n" + 
//				"    \"content\":\""+title+"\"\r\n" + 
//				"  }"; 
//		
//		}
//	return titledata;	
//	}
	
	static Pattern Title = Pattern.compile("<title>(.*?)</title>");
	 public static String meta_title(String largeText){
		 String title = null;
		 Matcher mtch = Title.matcher(largeText);
		if(mtch.find()){
		 		title = mtch.group(1);
			}
		else {
			System.out.println("Title is not found this Url");
		}
		return title;
	 }
	 
	 static Pattern meta_description = Pattern.compile("meta name=\"description\" content=\"(.*?)\"/>");
	 public static String Description(String largeText){
		 String des = null;
		 Matcher mtch = meta_description.matcher(largeText);
		 if(mtch.find()) {
			 des = mtch.group(1);
		 }
		 else {
			 System.out.println("Description is not found this Url");
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
	
	public static String Meta_data(String url) throws IOException, InterruptedException 
	{
		String Description = null;
		String host_name = null;
		String Domain = null;
		String json_data = null;
		
		Pattern ptn = Pattern.compile("(.*?)//(.*?)(/|$)");
		Matcher mtch = ptn.matcher(url);
		if(mtch.find())
		{
			host_name = mtch.group(1);
			 Domain = mtch.group(2);
		}
		else 
		{
			System.out.println("The Enter Url is not Valid ");
		}
		
		URL obj = new URL(host_name  +"//" + Domain + "/");
		
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();

			con.setRequestMethod("GET");
			
			boolean redirect = false;

			// normally, 3xx is redirect
			int status = con.getResponseCode();
			if (status != HttpURLConnection.HTTP_OK) {
			if (status == HttpURLConnection.HTTP_MOVED_TEMP || status == HttpURLConnection.HTTP_MOVED_PERM
			|| status == HttpURLConnection.HTTP_SEE_OTHER)
			redirect = true;
			}

//			System.out.println("Response Code ... " + status);

			if (redirect) {

			// get redirect url from "location" header field
			String newUrl = con.getHeaderField("Location");

			// get the cookie if need, for login
			// String cookies = con.getHeaderField("Set-Cookie");

			// open the new connnection again
			con = (HttpURLConnection) new URL(newUrl).openConnection();
			// con.setRequestProperty("Cookie", cookies);
			con.addRequestProperty("Accept-Language", "en-US,en;q=0.8");
			con.addRequestProperty("User-Agent", "Mozilla");

//			System.out.println("Redirect to URL : " + newUrl);

			}


			int responseCode = con.getResponseCode();
			
//			System.out.println("Response Code " + responseCode);
			
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
				 
				Description = ((Description(var)));
				String  title = ((meta_title(var)));
				int title_len = title.length();
				int description_len = Description.length();
				
		         json_data= "{\r\n" + 
							"\"MetaTile\":{\r\n" + 
							"  \"status\": \"found\",\r\n" + 
							"  \"content\":\""+title+"\",\r\n" + 
							"  \"length\":\""+title_len+"\"\r\n" + 
							"},"+"\n\"MetaDescription\":{\r\n" + 
						"  \"status\": \"found\",\r\n" + 
						"  \"content\":\""+Description+"\",\r\n" + 
						"  \"length\":\""+description_len+"\"\r\n" + 
						"}\r\n" + 
						"}";
			} 
			else 
			{
				System.out.println("GET request not worked");
			}
		
		return json_data;
}
}	
	
	
	

