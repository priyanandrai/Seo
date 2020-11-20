package com.seo.Onpagefactor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Get_robotstxt {
	static String output ="";
	
	public static String Get_robots(String url) throws IOException
	{
		
		Pattern ptn = Pattern.compile("(.*?)//(.*?)/");
		Matcher mtch = ptn.matcher(url);
		
		if (mtch.find())
		{
			String protocol = mtch.group(1);
			String domain = mtch.group(2);
			URL obj = new URL(protocol  +"//" + domain + "/robots.txt");

			
			try {

				HttpURLConnection con = (HttpURLConnection)obj.openConnection();

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

					System.out.println("Redirect to URL : " + newUrl);

				}

				int responseCode = con.getResponseCode();
				if (responseCode == 200) {

					BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
					String inputLine;
					StringBuffer response = new StringBuffer();

					while ((inputLine = in.readLine()) != null) {
						response.append(inputLine);
					}

					in.close();

					String var = response.toString();

					output = "{\r\n" + "  \"status\": \"Found\",\r\n" + "  \"content\":\"" + var + "\"\r\n" + "}";

				} else {
					output = "{\r\n" + "  \"status\": \"Not Found\",\r\n" + "  \"content\":\" N/A \"\r\n" + "}";

				}
			} catch (Exception e) {

				output = "{\r\n" + "  \"status\": \"Not Found\",\r\n" + "  \"content\":\" N/A \"\r\n" + "}";
			}

		}
		
		
		return output;
	}
	
	
	
}
