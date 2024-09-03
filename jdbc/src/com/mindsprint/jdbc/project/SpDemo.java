package com.mindsprint.jdbc.project;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

public class SpDemo {
    public static void main(String[] args) {


        String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost/hello";
        String username = "root";
        String password = "Year@2002";
        try {
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(url, username, password);
            CallableStatement stmt = conn.prepareCall("call getAllAccounts");
            ResultSet set=stmt.executeQuery();
            while (set.next()){
                System.out.println(set.getString(1)+" "+set.getString(2)+" "+set.getDouble(3));
            }


        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
