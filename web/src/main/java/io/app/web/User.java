package io.app.web;





import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Document(collection = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {
 

    @Id
    private String id;
    private String adNo;
    private String name;
    private String dob;
    private String grade;
    private String division;
    private String gender;
 


}