package com.seo.Onpagefactor;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class OnpageFactor {
	
	public static void main(String[] args) throws InterruptedException, IOException {
		@SuppressWarnings("resource")
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your URL string ");
		String url = sc.nextLine();

		String data = Meta_data(url);
		System.out.println(data);
	}
	
	@SuppressWarnings("unused")
	public static String[] Header(String largeText) {
		Pattern head1 = Pattern.compile("<h1");
		Pattern head2 = Pattern.compile("<h2");
		Pattern head3 = Pattern.compile("<h3");
		Pattern head4 = Pattern.compile("<h4");
		Pattern head5 = Pattern.compile("<h5");
		Pattern head6 = Pattern.compile("<h6");
		Pattern head7 = Pattern.compile("<h7");

		String[] ans = new String[7];

		Matcher mtch = head1.matcher(largeText);
		int h1 = 0;
		while (mtch.find()) {
			h1++;
		}
		ans[0] = "\"Headers\":{\r\n" + "\"header h1\":\"" + h1 + "\",";
		Matcher mtch1 = head2.matcher(largeText);
		int h2 = 0;
		while (mtch1.find()) {
			h2++;
		}
		ans[1] = "\"header h2\":\"" + h2 + "\",";

		Matcher mtch2 = head3.matcher(largeText);
		int h3 = 0;
		while (mtch2.find()) {
			h3++;
		}
		ans[2] = "\"header h3\":\"" + h3 + "\",";

		Matcher mtch3 = head4.matcher(largeText);
		int h4 = 0;
		while (mtch3.find()) {
			h4++;
		}
		ans[3] = "\"header h4\":\"" + h4 + "\",";

		Matcher mtch4 = head5.matcher(largeText);
		int h5 = 0;
		while (mtch4.find()) {
			h5++;
		}
		ans[4] = "\"header h5\":\"" + h5 + "\",";

		Matcher mtch5 = head6.matcher(largeText);
		int h6 = 0;
		while (mtch5.find()) {
			h6++;
		}
		ans[5] = "\"header h6\":\"" + h6 + "\",";

		Matcher mtch6 = head7.matcher(largeText);
		int h7 = 0;
		while (mtch6.find()) {
			h7++;
		}
		ans[6] = "\"header h7\":\"" + h7 + "\""+"\r\n}";
		return ans;
	}
	
	static Pattern Img = Pattern.compile("<img (.+?)>");

	public static String meta_Img(String largeText) {
		Matcher mtch = Img.matcher(largeText);
		int image_count = 0;
		String found = " Not Found ";
		String img;
		while (mtch.find()) {
			image_count++;
		}
		if (image_count != 0) {
			found = "Found";
		}

		img = "\"Image_Count\":{\r\n" + " \"status\": \"" + found + "\",\r\n" + " \"Count\":\"" + image_count
				+ "\"\r\n" + "}";

		return img;
	}

	static Pattern Alt = Pattern.compile("<img (.*?)alt(.*?)>");

	public static String meta_alt(String largeText) {
		Matcher altmtch = Alt.matcher(largeText);
		int alt_count = 0;
		String alt;
		String found = "Not Found ";
		while (altmtch.find()) {
			alt_count++;
		}
		if (alt_count != 0) {
			found = "Found";
		}
		alt = "\"Alt_Count\":{\r\n" + " \"status\": \"" + found + "\",\r\n" + " \"Count\":\"" + alt_count + "\"\r\n"
				+ "},";
		return alt;
	}

	static Pattern Title = Pattern.compile("<title>(.*?)</title>");
	
	public static String meta_title(String largeText) {
		String title = "N/A";
		String found = " Not Found ";
		Matcher mtch_tit = Title.matcher(largeText);
		if(mtch_tit.find())
		{
			title = mtch_tit.group(1);
			found = "Found";
		}
		int title_len = title.length();

		title = "\"MetaTile\":{\r\n" + "  \"status\": \"" + found + "\",\r\n" + "  \"content\":\"" + title + "\",\r\n"
				+ "  \"length\":\"" + title_len + "\"\r\n" + "}";
		return title;
	}

	static Pattern meta_description = Pattern.compile("meta name=\"description\" content=(.*?)/>");

	public static String Description(String largeText) {
		String des = "N/A";
		String found = " Not Found ";
		Matcher mtch_des = meta_description.matcher(largeText);
		if(mtch_des.find())
		{
			des = mtch_des.group(1);
			found = "Found";
		}
		int des_lenth = des.length();
		des = "\"MetaDescription\":{\r\n" + "  \"status\": \"" + found + "\",\r\n" + "  \"content\":" + des
				+ ",\r\n" + "  \"length\":\"" + des_lenth + "\"\r\n" + "}";
		return des;
	}

	public static String Meta_data(String url) throws IOException, InterruptedException {
		String Description;
		String image_count;
		String alt_count;
		String title = "N/A";
		String output ="";
		URL obj = new URL(url);

		try {
			
		
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
			if (responseCode == 200) {
				BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
				String inputLine;
				StringBuffer response = new StringBuffer();

				while ((inputLine = in.readLine()) != null) {
					response.append(inputLine + "\n");
				}
				in.close();
				String var = response.toString();
				Description = ((Description(var)));
				title = ((meta_title(var)));
				image_count = ((meta_Img(var)));
				alt_count = ((meta_alt(var)));
				String[] head = (Header(var));

				output = "{\r\n" + title + ",\r\n" + Description + ",\r\n" + image_count + ",\r\n" + alt_count
						+ "\r\n" + head[0] + "\r\n" + head[1] + "\r\n" + head[2] + "\r\n" + head[3] + "\r\n" + head[4]
						+ "\r\n" + head[5] + "\r\n" + head[6] + "\r\n}";

			}
			
		} catch (Exception e) {
			System.out.println("hello");
		}
		return output;
	}
}
