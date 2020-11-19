package com.seo.Onpagefactor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class GetMetadata {

	
	public static List<String> MetaTitle(String url) throws IOException, InterruptedException 
	{
			List<String> meta = new ArrayList<String>();


		{
			URL obj = new URL(url);
			HttpURLConnection con = (HttpURLConnection) obj.openConnection();

			con.setRequestMethod("GET");

			con.setRequestProperty("User-Agent", "Mozilla/5.0");

			int responseCode = con.getResponseCode();

			if (responseCode == HttpURLConnection.HTTP_OK) 
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
				meta.add((Metadata(var)));
			} 
			else 
			{
				System.out.println(responseCode);
			}
		}
		return meta;
	}
	
	
	public static String Metadata (String largeText)
	
	{
		
		final Pattern title_pattern = Pattern.compile("<title>(.*?)</title>");
		String titledata = "not found";
		if (title_pattern != null)
		{		
		Matcher mtch = title_pattern.matcher(largeText);
		String title  = mtch.group(1);
		
		titledata = " \"Metatile\":\r\n" + 
				"  {\r\n" + 
				"    \"status\":\"found\",\r\n" + 
				"    \"length\":"+title.length()+",\r\n" + 
				"    \"content\":\""+title+"\"\r\n" + 
				"  }"; 
		
		}
	return titledata;	
	}
}
	
	
	
	

