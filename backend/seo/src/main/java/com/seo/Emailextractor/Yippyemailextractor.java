package com.seo.Emailextractor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

public class Yippyemailextractor {
	public static List<String>YippySearchEmail (String url) throws IOException, InterruptedException 
	{
			List<String> emails = new ArrayList<String>();

		{
			@SuppressWarnings("deprecation")
			URL obj = new URL("https://www.yippy.com/search?query=" + URLEncoder.encode(url));
		
			Thread.sleep(5000);				

			HttpURLConnection con = (HttpURLConnection) obj.openConnection();

			con.setRequestMethod("GET");

			con.setRequestProperty("User-Agent", "Mozilla/5.0");

			int responseCode = con.getResponseCode();

			if (responseCode == HttpURLConnection.HTTP_OK) 
			{
				// success
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();

				while ((inputLine = in.readLine()) != null) 
				{
					response.append(inputLine + "\n");
				}
				in.close();

				String var = response.toString();
				
				 var = var.replaceAll("<span class=\"vivbold qt2\">", "");
	
				emails.addAll(Emailparser.captureValues(var));
				
			} 
			else 
			{
				System.out.println("GET request not worked");
			}
		}
		return emails;
	}
}
