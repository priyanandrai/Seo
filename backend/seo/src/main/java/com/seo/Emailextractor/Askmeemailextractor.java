package com.seo.Emailextractor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;



public class Askmeemailextractor {
	public static List<String> AskmeSearchEmail(String url) throws IOException, InterruptedException 
	{
			List<String> emails = new ArrayList<String>();

		int i = 0;
		while (i < 7) 
		{
			@SuppressWarnings("deprecation")
			URL obj = new URL("https://www.ask.com/web?q=" + URLEncoder.encode(url) + "&page=" + i);
			Thread.sleep(5000);
			i++;
			
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
				emails.addAll((Emailparser.captureValues(var)));
			} 
			else 
			{
				System.out.println("GET request not worked");
			}
		}
		return emails;
	}
}
