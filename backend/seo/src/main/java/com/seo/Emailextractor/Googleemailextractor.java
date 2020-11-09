package com.seo.Emailextractor;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
public class Googleemailextractor {

	@SuppressWarnings("deprecation")
	public static JSONArray GoogleSearchEmail(String url) throws IOException, InterruptedException 
	{
		JSONArray emails = new JSONArray();
		try {
			int i = 0;
			while (i < 100) 
			{
				URL obj = new URL("https://www.Google.com/search?q=" + URLEncoder.encode(url) + "&start=" + i);
				Thread.sleep(5000);
				i = i + 10;
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

					// print result
					String var = response.toString();
					emails.put(Emailparser.captureValues(var));
					// Create file
					} 
				else 
				{
					System.out.println("Facing problem while receving emails");
				}
			}
		} catch (Exception e) {
		e.printStackTrace();
		}
		

		
		System.out.println("emails "+ emails);
		return emails;
	}
	
}
