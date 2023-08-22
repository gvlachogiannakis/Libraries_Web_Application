package mainClasses;

import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

public class GetCoordinates {
    private NominatimResult[] results;

    public NominatimResult[] getResults(String address) {
        try {
            address = URLEncoder.encode(address, "UTF-8");
            String apiUrl = "https://nominatim.openstreetmap.org/search?q=" + address + "&format=json&addressdetails=1";

            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();

            Gson gson = new Gson();
            results = gson.fromJson(content.toString(), NominatimResult[].class);

        } catch (IOException e) {
            e.printStackTrace();
        }

        return this.results;
    }

    public int getLength() {
        return this.results.length;
    }

    public double getLat() {
        return this.results[0].lat;
    }

    public double getLon() {
        return this.results[0].lon;
    }

}

class NominatimResult {
    double lat;
    double lon;

}