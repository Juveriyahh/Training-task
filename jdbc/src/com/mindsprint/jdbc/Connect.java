package com.mindsprint.jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Connect {
    public static void main(String[] args){
        String driver="com.mysql.cj.jdbc.Driver";
        String url="jdbc:mysql://localhost/mindsprint";
        String username="root";
        String password="Year@2002";

        try {
            Class.forName(driver);
            Connection connection= DriverManager.getConnection(url,username,password);
            if(connection!=null){
                System.out.println("Connect Established");
                String sql="create table IF NOT EXISTS employee(id INT primary key auto_increment,"+
                        "name varchar(100),email varchar(20))";
                Statement stmt=connection.createStatement();
                boolean check=stmt.execute(sql);
                System.out.println("Table created successfully"+check);
            }
            else
                System.out.println("Error in Connection");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
