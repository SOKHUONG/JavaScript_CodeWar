function finalGrade (exam, projects) {   
    if(exam<=100 && 0<=projects)
    {
      if(exam>90 || projects>10) return 100;
       if(exam>75 && projects>=5) return 90;
        if(exam>50 && projects>=2) return 75;
        else return 0;
    }
    else 
        return 0;
      }
