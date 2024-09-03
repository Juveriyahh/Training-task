package com.mindsprint.jdbc.project;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConfig {
    public  static Connection getConnection(){
        String driver="com.mysql.cj.jdbc.Driver";
        String url="jdbc:mysql://localhost/mindsprint";
        String username="root";
        String password="Year@2002";
        Connection connection=null;
        try{
            Class.forName(driver);
            connection= DriverManager.getConnection(url,username,password);
        }catch (Exception e){
            e.printStackTrace();
        }
        return connection;
    }
}
