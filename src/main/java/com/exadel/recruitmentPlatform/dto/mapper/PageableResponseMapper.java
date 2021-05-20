package com.exadel.recruitmentPlatform.dto.mapper;

import com.exadel.recruitmentPlatform.dto.PageableResponseDto;
import com.exadel.recruitmentPlatform.dto.UserCandidateDto;
import com.exadel.recruitmentPlatform.entity.User;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PageableResponseMapper implements ListMapper<List <User>, PageableResponseDto>{

    @Override
    public PageableResponseDto toDto(List<User> users, int pageSize, int pageNumber) {
        PageableResponseDto pageableResponseDto = new PageableResponseDto();
        List<UserCandidateDto> userCandidatesDto = new ArrayList<>();
        for (User user : users) {
            UserCandidateDto userCandidateDto = new UserCandidateDto();
            userCandidateDto.setUserId(user.getId());
            userCandidateDto.setFirstName(user.getFirstName());
            userCandidateDto.setLastName(user.getLastName());
            userCandidateDto.setCountryName(user.getInternshipRequest() != null ?
                    user.getInternshipRequest().get(0).getCountry().getName() : null);
            userCandidateDto.setSpecialityName(user.getInternshipRequest() != null ?
                    user.getInternshipRequest().get(0).getSpeciality().getName() : null);
            userCandidateDto.setStatusName(user.getInternshipRequest() != null ?
                    user.getInternshipRequest().get(0).getStatus().name() : null);
            userCandidatesDto.add(userCandidateDto);
        }
        pageableResponseDto.setUserCandidates(userCandidatesDto);
        pageableResponseDto.setPageSize(pageSize);
        pageableResponseDto.setPageNumber(pageNumber);

        return pageableResponseDto;
    }

}
