package io.app.web;


import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserRepository userRepository;
   
   

   
    @PostMapping("/")
        public String saveuser(@RequestBody User user,BindingResult br) {
       if(br.hasErrors())
	   {
		  
		   return "make correct option";
	   }
	   else {
		   long n=userRepository.count();
			  if(n<10)
			  {
				  user.setId("R-00"+(n+1));
			  }
			  else
			  {
				  user.setId("R-0"+(n+1));
			  }
		   
		userRepository.save(user);
		return "Added"  ;
	   }
                                     
    }
   
    @GetMapping("/")
    public List<User> GetUsers() {
        return userRepository.findAll(Sort.by(Sort.Direction.ASC,"name"));
    }
 
}